import Image from "next/image";
import styles from "./singleuser.module.css";
import { updateUser } from "@/app/lib/actions";

const SingleUser = ({ user }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user?.img ?? "/noavatar.png"} alt="" fill />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user?.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={user.password}
          />
          <label>Phone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder={user.phone}
          />
          <label>Address</label>
          <textarea name="address" id="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin">
            <option value="true" selected={user?.isAdmin === "true"}>
              Yes
            </option>
            <option value="false" selected={user?.isAdmin === "false"}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive">
            <option value="true" selected={user?.isActive === "true"}>
              Yes
            </option>
            <option value="false" selected={user?.isActive === "false"}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
