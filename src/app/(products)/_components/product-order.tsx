"use client";

import { Card } from "@/app/_components/card";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const ProductOrder = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const priceOrder = searchParams.get("price");

  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const toLowest = () => {
    router.push(pathname + "?" + createQueryString("price", "lowest"));
  };

  const toHighest = () => {
    router.push(pathname + "?" + createQueryString("price", "highest"));
  };

  useEffect(() => {
    toLowest();
    // eslint-disable-next-line
  }, []);

  return (
    <Card className="px-4">
      <div className="flex justify-start items-center gap-x-8 py-2">
        <div
          className={classNames("text-sm font-bold product-order", {
            "product-order-active": priceOrder === "lowest",
          })}
          role="button"
          onClick={toLowest}
        >
          ارزانترین
        </div>
        <div
          className={classNames("text-sm font-bold product-order", {
            "product-order-active": priceOrder === "highest",
          })}
          role="button"
          onClick={toHighest}
        >
          گران‌ترین
        </div>
      </div>
    </Card>
  );
};
