import { API_URL } from "@/configs/global";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { ProductsCardList } from "./(products)/_components/product-post-card-list";
import { ProductOrder } from "./(products)/_components/product-order";

async function getProducts(): Promise<ProductSummary[]> {
  const res = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });
  return res.json();
}

const compare = (order: "lowest" | "highest") => {
  if (order === "lowest") {
    return (a: any, b: any) => a.price - b.price;
  }
  if (order === "highest") {
    return (a: any, b: any) => b.price - a.price;
  }
};

export default async function Home({ searchParams }: any) {
  const newestCoursesData = await getProducts();

  return (
    <>
      <section className="container mb-6">
        <ProductOrder />
      </section>
      <section className="container">
        <ProductsCardList
          products={newestCoursesData.sort(compare(searchParams.price))}
        />
      </section>
    </>
  );
}
