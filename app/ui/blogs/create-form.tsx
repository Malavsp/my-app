import { Button } from "@/app/ui/button";
import { createBlog } from "@/lib/action/form";
import { Authorfield, CategoryField } from "@/lib/definitions";

export default function Form({
  authors,
  categories,
}: {
  authors: Authorfield[];
  categories: CategoryField[];
}) {
  return (
    <form action={createBlog} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl mt-4">Blog Title</p>
      <input
        type="text"
        placeholder="Type here"
        required
        name="title"
        defaultValue=""
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border "
      />
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
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category}
          </option>
        ))}
      </select>
      <p className="text-xl mt-4">Author</p>
      <select
        name="author"
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select author
        </option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <br />
      <Button type="submit" className="mt-8  w-40">
        ADD
      </Button>
    </form>
  );
}
