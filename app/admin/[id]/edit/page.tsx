import EditForm from "@/app/ui/blogs/edit-form";
import { fetchBlogById, fetchCategories } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [blog, categories] = await Promise.all([
    fetchBlogById(id),
    fetchCategories(),
  ]);

  if (!blog || !categories) {
    notFound();
  }
  return (
    <>
      <EditForm blog={blog} categories={categories} />
    </>
  );
}
