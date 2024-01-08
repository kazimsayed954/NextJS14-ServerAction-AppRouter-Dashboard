import Link from "next/link";
import Search from "../dashboard/search/search";
import styles from "./user.module.css";
import Image from "next/image";
import Pagination from "../dashboard/pagination/Pagination";
import { deleteUser } from "@/app/lib/actions";

const UserPage = ({ users,count }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a User"} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => (
            <tr key={user?.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user?.img ?? "/noavatar.png"}
                    alt=""
                    height={40}
                    width={40}
                    className={styles.userImage}
                  />
                  {user?.username}
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.createdAt?.toString()?.slice(4,16)}</td>
              <td>{user?.idAdmin === "true" ? "Admin" : "Client"}</td>
              <td>{user?.isActive === "true" ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user?.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user?.id} />
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

export default UserPage;
