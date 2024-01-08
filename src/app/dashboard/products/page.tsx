import { fetchProducts } from "@/app/lib/data";
import Product from "@/app/ui/product/Product";

export default async function ProductsPage({searchParams}:any) {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page ?? 1;
  const {count,products} = await fetchProducts(q,page);


  return (
    <div>
      <Product products={products} />
    </div>
  );
}
