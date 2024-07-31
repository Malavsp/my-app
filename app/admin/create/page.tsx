import React from "react";
import Form from "@/app/ui/blogs/create-form";
import { fetchCategories } from "@/lib/data";

const Page = async () => {
  const [categories] = await Promise.all([fetchCategories()]);
  return (
    <>
      <Form categories={categories} />
    </>
  );
};

export default Page;
