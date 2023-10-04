import RootLayout from "@/components/Layouts/RootLayout";
import AllPowerSupply from "@/components/UI/AllPowerSupply";
import React from "react";

const PowerSupplyPage = ({ allPowerSupply }) => {
  return (
    <div>
      <AllPowerSupply allPowerSupply={allPowerSupply} />
    </div>
  );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/power_supply_unit");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allPowerSupply: data,
    },
    revalidate: 5,
  };
};
