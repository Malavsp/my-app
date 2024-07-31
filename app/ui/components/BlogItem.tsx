import React from "react";
import { Blog } from "@/lib/definitions";
import Link from "next/link";

const BlogItem = ({ blogs }: { blogs: Blog }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-2xl">
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {blogs.category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {blogs.title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {blogs.description}
        </p>
        <Link
          href={`/blogs/${blogs.id}`}
          className="inline-flex items-center py-2 font-semibold text-center"
        >
          Read more <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
