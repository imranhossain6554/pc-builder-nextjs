/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const AllProduct = ({ allProducts }) => {
  //   console.log(allProducts);
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {allProducts &&
          allProducts?.map((product) => (
            <ProductCard product={product} key={product?.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllProduct;

/* 
 const { id, title, img, price, status, category, rating } = product;
<div key={id} className="card w-96 bg-base-100 shadow-xl mb-4">
                  <figure>
                    <img src={img} width="auto" height="250px" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <p className="text-orange-400">{status}</p>
                    <Link href={`/products/${id}`}>
                      <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{price}৳</div>
                      </h2>
                    </Link>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="">
                      <div className="">
                        <p>
                          {" "}
                          <span className="font-bold capitalize">
                            Category:
                          </span>{" "}
                          <span className="bg-black p-2 px-4 text-white rounded-full capitalize">
                            {category}
                          </span>
                        </p>
                      </div>
                      <br />
                      <div className="">
                        <p>
                          {" "}
                          <span className="font-bold">Rating:</span> {rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

*/
