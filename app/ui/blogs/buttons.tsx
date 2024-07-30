import { deleteBlog } from "@/lib/action/form";
import Link from "next/link";

export function UpdateBlog({ id }: { id: number }) {
  return (
    <Link
      href={`/admin/${id}/edit`}
      className="p-2 mr-2 border border-b rounded-md hover:bg-gray-100"
    >
      <button>✏️</button>
    </Link>
  );
}

export function DeleteBlog({ id }: { id: number }) {
  const deleteBlogById = deleteBlog.bind(null, id);
  return (
    <form className="inline" action={deleteBlogById}>
      <button className="rounded-md border p-2 hover:bg-gray-100">🗑️</button>
    </form>
  );
}
