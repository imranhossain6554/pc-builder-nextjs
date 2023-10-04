import RootLayout from "@/components/Layouts/RootLayout";
import AllProcessor from "@/components/UI/AllProcessor";

const ProcessorPage = ({ allProcessors }) => {
  return (
    <div>
      <AllProcessor allProcessors={allProcessors} />
    </div>
  );
};

export default ProcessorPage;

ProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/processor");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProcessors: data,
    },
    revalidate: 5,
  };
};
