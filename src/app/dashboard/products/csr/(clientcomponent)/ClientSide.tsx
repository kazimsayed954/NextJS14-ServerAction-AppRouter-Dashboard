"use client";
import React, { useEffect, useState } from "react";

const ClientSide = ({ dataPromise }: any) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dataPromise?.then((data: any) => {
      setProducts(data?.products);
    });
  }, []);
  return (
    <div className="flex flex-wrap">
      {products?.map((product: any) => (
        <ProductCard key={product?.id} item={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ item }: any) => {
  return (
    <div
      key={item.id}
      className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={item?.img}
        alt="Product Image"
        width={240}
        height={240}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {item?.title}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {item?.description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {`$: ${item?.price}`}
          </p>
          <p className="text-base  font-medium text-gray-500  dark:text-gray-300">
            {"Category: " + item?.category}
          </p>
        </div>
        <p className="ml-auto text-base font-medium text-white-500">
          {`Color: ${item?.color}`}
        </p>
      </div>
    </div>
  );
};

export default ClientSide;
