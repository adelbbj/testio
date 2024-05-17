import Image from "next/image";
import { Card } from "./_components/card";
import { Button } from "./_components/button/button";
import { Product } from "./_components/products/product";
import { API_URL } from "@/configs/global";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { ProductsCardList } from "./(products)/_components/product-post-card-list";

async function getProducts(): Promise<ProductSummary[]> {
  const res = await fetch(`${API_URL}/products`, {
    // next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const newestCoursesData = await getProducts();

  return (
    <>
      <section className="container mb-6">
        <OrderButtons />
      </section>
      <section className="container">
        <ProductsCardList products={newestCoursesData} />
      </section>
    </>
  );
}

const OrderButtons = () => {
  return (
    <Card className="px-4">
      <div className="flex justify-start items-center gap-x-8 py-2">
        <div className="text-sm font-medium" role="button">
          ارزانترین
        </div>
        <div className="text-sm font-bold" role="button">
          گران‌ترین
        </div>
      </div>
    </Card>
  );
};
