import React from "react";
import Table from "../ui/blogs/table";
import { fetchAllBlogs } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const Page = async () => {
  const blogs = await fetchAllBlogs();
  if (!blogs) {
    notFound();
  }
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 m-10">
      <h1>
        All Blogs
        <Button variant="link" className="border ml-96">
          <Link href="/admin/create">Create Post</Link>
        </Button>
      </h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border ">
        <Table blogs={blogs}></Table>
      </div>
    </div>
  );
};

export default Page;
