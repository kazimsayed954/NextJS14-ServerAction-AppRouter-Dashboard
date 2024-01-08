const page = () => {
  const handleForm = async(formData:any) => {
    "use server";
    console.log(">>",formData)
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
