"use client";

import React from "react";
import { IconPencil, IconTrash } from "@/app/_components/icons/icons";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { UpdateProduct } from "./update-product";
import { DeleteProduct } from "./delete-product";

export const Actions: React.FC<any> = ({ data }: { data: ProductSummary }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modifyModal, setModifyModal] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenModify = () => setModifyModal(true);
  const handleCloseModify = () => setModifyModal(false);

  return (
    <>
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

      <UpdateProduct
        data={data}
        isOpen={modifyModal}
        onClose={handleCloseModify}
      />
      <DeleteProduct data={data} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};
