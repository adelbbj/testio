"use client";

import { Button } from "@/app/_components/button/button";
import { Modal } from "@/app/_components/modal";
import { Textarea } from "@/app/_components/textarea";
import { Textbox } from "@/app/_components/textbox";
import { useUpdateProductMutation } from "@/services/productApi";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const UpdateProduct = ({ data, isOpen, onClose }: any) => {
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: data,
  });

  const onSubmit = (values: ProductSummary) => {
    updateProduct(values).then(() => {
      onClose();
      toast.success("محصول ویرایش شد.");
    });
  };

  return (
    <Modal.Frame onClose={onClose} open={isOpen} className="w-full max-w-2xl">
      <Modal.Head>ویرایش محصول</Modal.Head>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col h-[600px]">
            <div className="h-full space-y-4">
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
                name="description"
                control={control}
                render={({ field }) => <Textarea label="توضیحات" {...field} />}
              />
            </div>
            <div className="flex items-center justify-start gap-4 ">
              <Button variant="primary" type="submit" isLoading={updateLoading}>
                ثبت تغییرات
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={onClose}
                disabled={updateLoading}
              >
                انصراف
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal.Frame>
  );
};
