import RootLayout from "@/components/Layouts/RootLayout";
import AllStorage from "@/components/UI/AllStorage";
import React from "react";

const StorageDevicePage = ({ allStorage }) => {
  return (
    <div>
      <AllStorage allStorage={allStorage} />
    </div>
  );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/storage_device");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allStorage: data,
    },
    revalidate: 5,
  };
};
