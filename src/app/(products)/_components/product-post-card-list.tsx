import React from "react";
import { Product } from "./product-post-card";
import { ProductSummary } from "@/types/product-post-summary.interface";

type ProductsCardListProps = {
  products: ProductSummary[];
};

export const ProductsCardList: React.FC<ProductsCardListProps> = async ({
  products,
}) => {
  return (
    <div className="grid grid-cols-12 justify-center xl:justify-start gap-6 mt-10">
      {products?.map((product) => (
        <Product key={`course-${product.id}`} {...product} />
      ))}
    </div>
  );
};
