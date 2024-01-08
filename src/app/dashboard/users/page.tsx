import { fetchUsers } from "@/app/lib/data";
import UserPage from "@/app/ui/users/UserPage";

export default async function UsersPage({searchParams}:any) {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page ?? 1;
  const {count,users} = await fetchUsers(q,page);

  return (
    <div>
      <UserPage users={users} count={count}/>
    </div>
  );
}
