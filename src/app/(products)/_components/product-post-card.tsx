import { Card } from "@/app/_components/card";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { FC } from "react";
import { Images } from "./images";
import Link from "next/link";
import { Rating } from "./rating";
import { ProductPrice } from "./price";

export const Product: FC<ProductSummary> = ({
  id,
  title,
  image,
  price,
  rating,
}: ProductSummary) => {
  return (
    <Card className="px-4 col-span-4 space-y-4">
      <div className="p-5 relative">
        <Link
          href={`/product/${id}?title=${title
            .replaceAll(" ", "-")
            .toLowerCase()}`}
        >
          <Images
            image={[image]}
            name={title}
            width={280}
            height={425}
            priority={true}
            sizes="(max-width: 640px) 100vw,
                (max-width: 1154px) 33vw,
                (max-width: 1536px) 25vw,
                20vw"
          />
        </Link>
      </div>

      <div className="text-black font-bold text-base leading-8">{title}</div>
      <div className="flex justify-between items-center">
        <Rating rate={rating.rate} />
        <ProductPrice price={price} />
      </div>
    </Card>
  );
};
