"use client";

import { Button } from "@/app/_components/button/button";
import { IconPencil, IconTrash } from "@/app/_components/icons/icons";
import { Modal } from "@/app/_components/modal";
import { Textarea } from "@/app/_components/textarea";
import { Textbox } from "@/app/_components/textbox";
import { API_URL } from "@/configs/global";
import { deleteData, updateData } from "@/core/http-service/http-service";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, Form, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const Actions = ({ data }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [modify, setModify] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenModify = () => setModify(true);
  const handleCloseModify = () => setModify(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: data,
  });

  const onSubmit = (values) => {
    updateData(`${API_URL}/products/${values.id}`, values);
    handleCloseModify()
    toast.success("محصول ویرایش شد.");
  };

  const onDelete = () => {
    deleteData(`${API_URL}/products/${data.id}`).then(() => {
      handleCloseModify();
      router.push("/");
      toast.success("محصول حذف شد.");
    });
  };

  return (
    <>
      <Modal.Frame
        onClose={handleClose}
        open={isOpen}
        className="w-full max-w-md"
      >
        <Modal.Body>
          <div className="font-bold text-black text-lg mb-8">
            آیا از حذف محصول اطمینان دارید؟
          </div>
          <div className="flex items-center justify-start gap-4">
            <Button variant="error" onClick={onDelete}>
              بله، حذف محصول
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              انصراف
            </Button>
          </div>
        </Modal.Body>
      </Modal.Frame>

      <Modal.Frame
        onClose={handleCloseModify}
        open={modify}
        className="w-full max-w-2xl"
      >
        <Modal.Head>ویرایش محصول</Modal.Head>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col h-[600px]">
              <div className="h-full space-y-4">
                <Controller
                  name="fa_title"
                  control={control}
                  render={({ field }) => (
                    <Textbox label="عنوان فارسی محصول" {...field} />
                  )}
                />
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Textbox
                      label="عنوان انگلیسی"
                      hasError={Boolean(errors.title)}
                      {...field}
                    />
                  )}
                />
                <div className="flex gap-4">
                  <Controller
                    name="price"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Textbox
                        label="قیمت اصلی محصول"
                        hasError={Boolean(errors.price)}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="qty"
                    control={control}
                    render={({ field }) => (
                      <Textbox label="تعداد موجودی" {...field} />
                    )}
                  />
                </div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea label="توضیحات" {...field} />
                  )}
                />
              </div>
              <div className="flex items-center justify-start gap-4 ">
                <Button variant="primary" type="submit">
                  ثبت تغییرات
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleCloseModify}
                >
                  انصراف
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal.Frame>

      <div className="bg-white border border-base-200 flex rounded-full overflow-hidden">
        <div
          className="flex items-center justify-center px-2 py-3 gap-1 text-primary hover:text-primary-content hover:bg-primary-focus cursor-pointer"
          onClick={handleOpenModify}
        >
          <IconPencil
            fill="currentColor"
            width={16}
            height={16}
            viewBox="0 0 16 16"
          />
          <span className="text-xs font-medium">ویرایش</span>
        </div>
        <div className="border border-base-200 w-[1px]" />
        <div
          className="flex items-center justify-center px-2 py-3 gap-1 text-error hover:text-primary-content hover:bg-error cursor-pointer"
          onClick={handleOpen}
        >
          <IconTrash
            fill="currentColor"
            width={16}
            height={16}
            viewBox="0 0 16 16"
          />
          <span className="text-xs font-medium">حذف محصول</span>
        </div>
      </div>
    </>
  );
};
