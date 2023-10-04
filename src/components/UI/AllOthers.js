import React from "react";
import ProductCard from "./ProductCard";

const AllOthers = ({ allOthers }) => {
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">
          All Others Category
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {allOthers &&
          allOthers?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllOthers;
