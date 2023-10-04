import React from "react";
import ProductCard from "./ProductCard";

const AllMotherboard = ({ allMotherboards }) => {
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">All Motherboard</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {allMotherboards &&
          allMotherboards?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllMotherboard;
