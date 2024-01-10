import { fetchProducts } from "@/app/lib/data";
import ProductCard from "@/app/ui/product/productCard/productCard";

const page = async ({ searchParams }: any) => {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page ?? 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <>
      <h1>Server Side Rendering</h1>
      <div className="flex flex-wrap">
        {products?.map((product: any) => {
          return <ProductCard key={product?.id} item={product} />;
        })}
      </div>
    </>
  );
};

export default page;
