import RootLayout from "@/components/Layouts/RootLayout";
import AllOthers from "@/components/UI/AllOthers";

const OthersPage = ({ allOthers }) => {
  return (
    <div>
      <AllOthers allOthers={allOthers} />
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/others");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allOthers: data,
    },
    revalidate: 5,
  };
};
