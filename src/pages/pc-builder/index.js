import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import React from "react";

const PcBuilderPage = ({ allCategory }) => {
  return (
    <div>
      <div className="w-[70%] mx-auto border-2 border-solid border-amber-400 p-8 rounded-lg">
        <div>
          <h2>
            Pc Builder - Build your own PC with{" "}
            <span className="text-purple-400"> Smart Tech</span>
            <hr />
          </h2>
        </div>
        <div>
          <h3 className="text-sm py-4 text-orange-400 font-bold">
            Core Components Make PC
          </h3>
          <div>
            {allCategory.map((category) => (
              <>
                <div className="flex justify-between items-center my-4 bg-black p-4 text-light rounded-2xl">
                  <li className="list-none capitalize text-xl text-white">
                    {category.name}
                  </li>
                  <Link href={`${category.link}`}>
                    <button className="btn btn-primary">Choose</button>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      allCategory: data,
    },
  };
};
