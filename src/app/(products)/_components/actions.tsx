"use client";

import { Button } from "@/app/_components/button/button";
import { IconPencil, IconTrash } from "@/app/_components/icons/icons";
import { Modal } from "@/app/_components/modal";
import React from "react";

export const Actions = () => {
  const [isOpen, setIsOpen] = React.useState();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Modal.Frame onClose={handleClose} open={isOpen}>
        <Modal.Head>آیا از حذف محصول اطمینان دارید؟</Modal.Head>
        <Modal.Body>
          <Button variant="error">بله، حذف محصول</Button>
          <Button variant="secondary">انصراف</Button>
        </Modal.Body>
      </Modal.Frame>
      <div className="bg-white border border-base-200 flex rounded-full overflow-hidden">
        <div className="flex items-center justify-center px-2 py-3 gap-1 text-primary hover:text-primary-content hover:bg-primary-focus cursor-pointer">
          <IconPencil
            fill="currentColor"
            width={16}
            height={16}
            viewBox="0 0 16 16"
          />
          <span className="text-xs font-medium" onClick={handleOpen}>
            ویرایش
          </span>
        </div>
        <div className="border border-base-200 w-[1px]" />
        <div className="flex items-center justify-center px-2 py-3 gap-1 text-error hover:text-primary-content hover:bg-error cursor-pointer">
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
