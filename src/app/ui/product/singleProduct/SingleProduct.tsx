import Image from "next/image";
import styles from "./singleproduct.module.css";
import { updateProduct } from "@/app/lib/actions";

const SingleProduct = ({product}:any) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product?.img ?? "/noproduct.jpg"} alt="" fill />
        </div>
        {product?.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" value={product?.id} name="id" />
          <label>Title</label>
          <input type="text" name="title" id="title" placeholder={product?.title} />
          <label>Price</label>
          <input type="number" name="price" id="price" placeholder={product?.price} />
          <label>Stock</label>
          <input type="number" name="stock" id="stock" placeholder={product?.stock} />
          <label>Color</label>
          <input type="text" name="color" id="color" placeholder={product?.color} />
          <label>Size</label>
          <input type="text" name="size" id="size" placeholder={product?.size} />
          <label>Category</label>
          <select name="category" id="category">
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="laptop">Laptop</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={16}
            placeholder="description"
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
