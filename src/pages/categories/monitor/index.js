import RootLayout from "@/components/Layouts/RootLayout";
import AllMonitors from "@/components/UI/AllMonitors";
import React from "react";

const MonitorPage = ({ allMonitors }) => {
  console.log("all monitors: ", allMonitors);
  return (
    <div>
      <AllMonitors allMonitors={allMonitors} />
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/monitor");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allMonitors: data,
    },
    revalidate: 5,
  };
};
