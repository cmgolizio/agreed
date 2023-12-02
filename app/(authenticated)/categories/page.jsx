import React from "react";

import AuthLink from "@/components/ui/AuthLink";

const Categories = () => {
  return (
    <>
      <h1 className='text-3xl pb-10'>Categories</h1>
      <AuthLink
        type={{ title: "Movies", href: "/categories/movies" }}
        styles='text-2xl text-[#7171ff] dark:text-[#6666D9]'
      />
    </>
  );
};

export default Categories;
