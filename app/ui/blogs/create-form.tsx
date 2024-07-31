"use client";

import { Button } from "@/app/ui/button";
import { createBlog, State } from "@/lib/action/form";
import { Authorfield, CategoryField } from "@/lib/definitions";
import { stat } from "fs";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Form({ categories }: { categories: CategoryField[] }) {
  const initialState: State = { message: null, errors: {} };
  //   const [state, formAction] = useActionState(createBlog, initialState);
  const [state, formAction] = useFormState(createBlog, initialState);
  console.log(state);
  return (
    <form action={formAction} className="pt-5 px-5 sm:pt-12 sm:pl-16 ml-16">
      <p className="text-xl mt-4">Blog Title</p>
      <input
        type="text"
        placeholder="Type here"
        required
        name="title"
        defaultValue=""
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
        placeholder="Type content here"
        required
        rows={6}
        name="description"
        defaultValue=""
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
        className="w-41 mt-4 px-4 py-3 border text-gray-500"
        defaultValue=""
        required
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
        defaultValue=""
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
          ADD
        </Button>
      </div>
    </form>
  );
}
