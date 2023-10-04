import RootLayout from "@/components/Layouts/RootLayout";
import SingleProductDetailPage from "@/components/UI/ProductDetailPage";
import React from "react";

const MonitorDetailsPage = ({ product }) => {
  return (
    <div>
      <SingleProductDetailPage product={product} />
    </div>
  );
};

export default MonitorDetailsPage;

MonitorDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/monitor");
  const products = await res.json();

  console.log("Products", products);

  const paths = products?.map((product) => ({
    params: { productsId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/monitor/${params.productsId}`);
  const data = await res.json();

  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
