/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const AllMonitors = ({ allMonitors }) => {
  console.log(allMonitors);
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">All Monitors</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {allMonitors &&
          allMonitors?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllMonitors;
