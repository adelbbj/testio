import { Card } from "@/app/_components/card";
import { Rating } from "@/app/_components/products/rating/rating";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { FC } from "react";
import Link from "next/link";
import { API_URL } from "@/configs/global";
import { Images } from "../../_components/images";
import { Actions } from "../../_components/actions";
// import { Card } from "../card";
// import { Rating } from "./rating/rating";

async function getProduct(id: number): Promise<ProductSummary[]> {
  const res = await fetch(`${API_URL}/products/${id}`, {
    // next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });
  return res.json();
}

export default async function Page({ params }) {
  const product = await getProduct(params.id);

  return (
    <article className="container">
      <Card className="!p-0 grid grid-cols-12 !rounded-[20px] relative w-full">
        <div className="absolute top-5 right-5">
          <Actions />
        </div>
        <div className="col-span-5 p-12">
          <Images
            image={[product.image]}
            name={product.title}
            width={280}
            height={425}
            priority={true}
            sizes="(max-width: 640px) 100vw,
                (max-width: 1154px) 33vw,
                (max-width: 1536px) 25vw,
                20vw"
          />
        </div>
        {/* <div className="border border-base-200 w-[1px]" /> */}

        <div className="col-span-7 py-10 px-0 flex flex-col gap-y-4 border-r border-base-200">
          <div className="px-5">
            <h1 className="font-bold text-xl leading-8">{product.title}</h1>
            <h6>{product.title}</h6>
            <div className="flex flex-row justify-start items-center gap-x-3">
              <Rating
                rate={product.rating.rate}
                className="font-normal text-xs leading-6"
              />
              <div className="border border-base-200 w-[1px] h-4" />
              <span className="font-normal text-xs leading-6">
                {product.rating.count} تا باقی مانده
              </span>
            </div>
          </div>

          <div className="border-b border-base-200 h-[1px]" />

          <div className="h-full px-5">{product.description}</div>

          <div className="border-b border-base-200 h-[1px]" />

          <div className="flex justify-between items-center pt-5 px-5">
            <span>مبلغ قابل پرداخت:</span>
            <span>۸۹,۸۵۰,۰۰ تومان</span>
          </div>
        </div>
      </Card>
    </article>
  );
}
