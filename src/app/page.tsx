import { API_URL } from "@/configs/global";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { ProductsCardList } from "./(products)/_components/product-post-card-list";
import { ProductOrder } from "./(products)/_components/product-order";

async function getProducts(): Promise<ProductSummary[]> {
  const res = await fetch(`${API_URL}/products`, {
    // next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });
  return res.json();
}

const compare = (order) => {
  if (order === "lowest") {
    return (a, b) => a.price - b.price;
  }
  if (order === "highest") {
    return (a, b) => b.price - a.price;
  }
};

export default async function Home({ searchParams }) {
  const newestCoursesData = await getProducts(searchParams.price);

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
