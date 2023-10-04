import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { id, title, img, price, status, category, rating } = product;
  return (
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
              <span className="font-bold capitalize">Category:</span>{" "}
              <span className="bg-black px-2 py-1 text-white rounded-full capitalize">
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
          <div className="text-center my-4">
            <button className="btn btn-primary">Add To Builder</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
