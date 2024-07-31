import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Authorfield, Blog, CategoryField } from "./definitions";

export async function fetchBlogById(id: string) {
  noStore();
  try {
    const data = await sql<Blog>`
        SELECT * 
        FROM blog 
        WHERE id = ${id}`;
    const blog = data.rows[0];

    return blog;
  } catch (error) {
    console.error(`Error in fetching blog of id ${id}.`);
    throw new Error(`Error in fetching blog of id ${id}.`);
  }
}

export async function fetchAllBlogs() {
  noStore();
  try {
    const data = await sql<Blog>`SELECT * FROM blog`;

    return data.rows;
  } catch (error) {
    console.error(`Error in fetching blogs.`);
    throw new Error("Error in fetching blogs.");
  }
}

export async function fetchAuthors() {
  noStore();
  try {
    const data =
      await sql<Authorfield>`SELECT DISTINCT author FROM blog ORDER BY id`;
    const authors = data.rows;

    return authors;
  } catch (error) {
    console.error(`Error in fetching authors`);
    throw new Error("Error in fetching authors");
  }
}

export async function fetchCategories() {
  noStore();
  try {
    const data = await sql<CategoryField>`SELECT DISTINCT category FROM blog`;

    return data.rows;
  } catch (error) {
    console.error(`Error in fetching categories`);
    throw new Error("Error in fetching categories");
  }
}
