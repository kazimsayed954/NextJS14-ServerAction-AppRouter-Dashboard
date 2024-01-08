import { fetchProduct } from "@/app/lib/data";
import SingleProduct from "@/app/ui/product/singleProduct/SingleProduct";

const SingleProductPage = async({params}:any) => {
  const {id} = params;
  const product = await fetchProduct(id);
  return (
    <>
        <SingleProduct product={product}/>
    </>
  );
}

export default SingleProductPage;
