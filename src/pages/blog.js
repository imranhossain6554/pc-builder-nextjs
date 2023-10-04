import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h2>Hi, This is Blog Page</h2>
    </div>
  );
};

export default BlogPage;

BlogPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
