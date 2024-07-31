"use client";
import { Blog, CategoryField } from "@/lib/definitions";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { updateBlog } from "@/lib/action/form";
import { useFormState } from "react-dom";
import { State } from "@/lib/action/form";
export default function EditForm({
  blog,
  categories,
}: {
  blog: Blog;
  categories: CategoryField[];
}) {
  //   console.log(authors);
  //   console.log(blog.category);
  const updateBlogById = updateBlog.bind(null, blog.id);

  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(updateBlogById, initialState);
  return (
    <form className="pt-5 px-5 sm:pt-12 sm:pl-16 ml-16" action={formAction}>
      <p className="text-xl mt-4">Blog Title</p>
      <input
        type="text"
        required
        name="title"
        defaultValue={blog.title}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border "
      />
      <div>
        {state.errors?.title &&
          state.errors.title.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
      </div>
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        typeof="text"
        required
        rows={6}
        name="description"
        defaultValue={blog.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border "
      />
      <div>
        {state.errors?.description &&
          state.errors.description.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
      </div>
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        defaultValue={blog.category}
      >
        <option value="" disabled>
          Select category
        </option>
        {categories.map((category, i) => (
          <option key={i} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
      <div>
        {state.errors?.category &&
          state.errors.category.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
      </div>
      <p className="text-xl mt-4">Author</p>
      <input
        type="text"
        placeholder="Type author name here"
        required
        name="author"
        defaultValue={blog.author}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border "
      />
      <div>
        {state.errors?.author &&
          state.errors.author.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
      </div>
      <div>
        {state.message && (
          <p className="text-sm text-red-500 mt-2">{state.message}</p>
        )}
      </div>
      <br />
      <div className="my-6 ">
        <Link
          href="/admin"
          className=" m-3 rounded-lg bg-gray-100 p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" className="">
          Edit Blog
        </Button>
      </div>
    </form>
  );
}
