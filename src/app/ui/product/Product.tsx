import Link from "next/link";
import Search from "../dashboard/search/search";
import styles from "./product.module.css";
import Image from "next/image";
import Pagination from "../dashboard/pagination/Pagination";
import { deleteProduct } from "@/app/lib/actions";

const Product = ({ products, count }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a Product"} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: any) => (
            <tr key={product?.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product?.img ?? "/noproduct.jpg"}
                    alt=""
                    height={40}
                    width={40}
                    className={styles.productImage}
                  />
                  {product?.title}
                </div>
              </td>
              <td>{product?.description}</td>
              <td>{product?.price}</td>
              <td>{product?.createdAt?.toString()?.slice(4, 16)}</td>
              <td>{product?.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product?.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product?.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Product;
