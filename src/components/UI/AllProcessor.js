import React from "react";
import ProductCard from "./ProductCard";

const AllProcessor = ({ allProcessors }) => {
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">
          All Processor Category
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {allProcessors &&
          allProcessors?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllProcessor;
