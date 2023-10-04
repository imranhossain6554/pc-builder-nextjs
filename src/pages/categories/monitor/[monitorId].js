import RootLayout from "@/components/Layouts/RootLayout";
import SingleProductDetailPage from "@/components/UI/ProductDetailPage";

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
  const res = await fetch("http://localhost:5001/monitor");
  const products = await res.json();

  console.log("Products", products);

  const paths = products?.map((product) => ({
    params: { monitorId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5001/monitor/${params.monitorId}`);
  const data = await res.json();

  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
