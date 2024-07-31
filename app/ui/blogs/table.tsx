import { Blog } from "@/lib/definitions";
import Image from "next/image";
import React from "react";
import { DeleteBlog, UpdateBlog } from "./buttons";
import { dateFormatter } from "@/lib/utils";

const Table = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <table className="w-full text-sm text-gray-500">
      <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="hidden sm:block px-6 py-3">
            Author
          </th>
          <th scope="col" className="px-6 py-3">
            Blog Title
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id} className="bg-white border-b ">
            <th
              scope="row"
              className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              <Image
                src={"/blog/author-image.png"}
                alt="author"
                width={40}
                height={10}
                className="rounded-full"
              />
              {blog.author}
            </th>
            <td className="px-6 py-4">{blog.title}</td>
            <td className=" py-4">{dateFormatter(blog.date)}</td>
            <td className="px-6 py-4">
              <UpdateBlog id={blog.id} />
              <DeleteBlog id={blog.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
