import { fetchUser } from "@/app/lib/data";
import SingleUser from "@/app/ui/users/singleUser/SingleUser";

const SingleUserPage = async ({ params }: any) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <>
      <SingleUser user={user} />
    </>
  );
};

export default SingleUserPage;
