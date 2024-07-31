import React from "react";
import BlogItem from "./BlogItem";
import { fetchAllBlogs } from "@/lib/data";

const BlogList = async () => {
  const blogs = await fetchAllBlogs();
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button>Technology</button>
        <button>Startup </button>
        <button>Lifestyle</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs?.map((item, i) => {
          return <BlogItem key={item.id} blogs={item} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
