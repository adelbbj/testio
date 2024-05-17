"use client";

import { Button } from "@/app/_components/button/button";
import { Modal } from "@/app/_components/modal";
import { useDeleteProductMutation } from "@/services/productApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const DeleteProduct = ({ data, isOpen, onClose }: any) => {
  const router = useRouter();

  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation();

  const onDelete = () => {
    deleteProduct(data).then(() => {
      onClose?.();
      router.push("/");
      toast.success("محصول حذف شد.");
    });
  };

  return (
    <Modal.Frame onClose={onClose} open={isOpen} className="w-full max-w-md">
      <Modal.Body>
        <div className="font-bold text-black text-lg mb-8">
          آیا از حذف محصول اطمینان دارید؟
        </div>
        <div className="flex items-center justify-start gap-4">
          <Button variant="error" onClick={onDelete} isLoading={deleteLoading}>
            بله، حذف محصول
          </Button>

          <Button
            variant="secondary"
            onClick={onClose}
            disabled={deleteLoading}
          >
            انصراف
          </Button>
        </div>
      </Modal.Body>
    </Modal.Frame>
  );
};
