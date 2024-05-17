import { FC } from "react";
import { Card } from "../card";
import { Rating } from "./rating/rating";

export const Product: FC = () => {
  return (
    <Card className="px-4 col-span-4 space-y-4">
      {/* <Images
              image={product.image}
              name={product.name}
              width={280}
              height={425}
              priority={index === 0 ? true : false}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1154px) 33vw,
                (max-width: 1536px) 25vw,
                20vw"
            /> */}

      <div className="text-black font-bold text-base leading-8">
        گوشی موبایل اپل مدل iPhone 13 Pro Max LLA تک سیم‌ کارت ظرفیت 128
        گیگابایت
      </div>
      <div className="flex justify-between items-center">
        <Rating rate={4.5} />
        <span className="text-primary font-bold text-lg leading-8">
          ۸۹,۸۵۰,۰۰ تومان
        </span>
      </div>
    </Card>
  );
};
