/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import SingleProductDetailPage from "@/components/UI/ProductDetailPage";

const ProductDetailPage = ({ product }) => {
  return (
    <>
      <SingleProductDetailPage product={product} />
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products/");
  const products = await res.json();

  console.log("Products", products);

  const paths = products?.map((product) => ({
    params: { productsId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params.productsId}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};

/* 
export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    console.log("product data: ", products.data);

    const paths = products?.data?.map((product) => ({
      params: { productsId: product.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params?.productsId}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
 */
