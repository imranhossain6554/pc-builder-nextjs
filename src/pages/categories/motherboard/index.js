import RootLayout from "@/components/Layouts/RootLayout";
import AllMotherboard from "@/components/UI/AllMotherboard";
import React from "react";

const MotherboardPage = ({ allMotherboards }) => {
  return (
    <div>
      <AllMotherboard allMotherboards={allMotherboards} />
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/motherboard");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allMotherboards: data,
    },
    revalidate: 5,
  };
};
