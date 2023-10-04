import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProduct";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategory/FeaturedCategories";
import Navbar from "@/components/shared/Navbar";
import { Button } from "antd";
import React from "react";

const HomePage = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <div>
      <div className="">
        <Banner />
      </div>
      <div>
        <AllProduct allProducts={allProducts} />
      </div>
      <div className="py-20">
        <FeaturedCategories />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

function getRandomProducts(array, n) {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, n);
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  // console.log(data);
  const randomProducts = getRandomProducts(data, 6);
  return {
    props: {
      allProducts: randomProducts,
    },
    revalidate: 5,
  };
};
