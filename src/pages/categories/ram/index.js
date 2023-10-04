import RootLayout from "@/components/Layouts/RootLayout";
import AllRams from "@/components/UI/AllRams";
import React from "react";

const RamPage = ({ allRams }) => {
  return (
    <div>
      <AllRams allRams={allRams} />
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/ram");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allRams: data,
    },
    revalidate: 5,
  };
};
