import { fetchProducts } from "@/app/lib/data";
import React from "react";
import ClientSide from "./(clientcomponent)/ClientSide";

const page = async ({ searchParams }: any) => {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page ?? 1;
  const data = fetchProducts(q, page);
  return (
    <div>
      <h1>Client Side Rendering</h1>
      <ClientSide dataPromise={data} />
    </div>
  );
};

export default page;
