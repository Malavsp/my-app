"use server";

import { signIn, signOut } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  title: z.string().trim().min(1, { message: "Please enter Blog Title." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Please enter Blog description." }),
  category: z
    .string()
    .trim()
    .min(1, { message: "Please select Blog category." }),
  author: z
    .string()
    .trim()
    .min(1, { message: "Please enter Blog Author Name." }),
  date: z.string(),
});

const CreateBlog = FormSchema.omit({ id: true, date: true });
const UpdateBlog = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    category?: string[];
    author?: string[];
  };
  message?: string | null;
};

export const createBlog = async (previousData: State, formData: FormData) => {
  // console.log("Previous Data", previousData);
  const validatedFields = CreateBlog.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
  });
  // console.log("Validated Fields", validatedFields);
  // console.log("Tostring error", validatedFields.error?.toString());
  // console.log("flatten errors", validatedFields.error?.flatten().fieldErrors);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to create blog.",
    };
  }

  const { title, description, category, author } = validatedFields.data;
  // console.log(typeof title, typeof description, category);
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`
    INSERT INTO blog (title, description, category, date,author)
    VALUES (${title}, ${description}, ${category},${date},${author})
    `;
  } catch (error) {
    return {
      message: "Database Error : Failed to Create Blog",
    };
  }

  revalidatePath("/admin");
  redirect("/admin");
};

export async function updateBlog(
  id: number,
  previousData: State,
  formData: FormData
) {
  console.log(id);
  const validatedFields = UpdateBlog.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
  });

  // const { title, description, category, author } = UpdateBlog.parse({
  //   title: formData.get("title"),
  //   description: formData.get("description"),
  //   category: formData.get("category"),
  //   author: formData.get("author"),
  // });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields. Failed to Edit blog.",
    };
  }

  const { title, description, category, author } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`UPDATE blog 
  SET title = ${title}, description = ${description}, date = ${date}, category = ${category},author = ${author}
  WHERE id = ${id}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to update blog",
    };
  }

  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteBlog(id: number) {
  // throw new Error("");
  try {
    await sql`DELETE FROM blog WHERE id =${id}`;
    revalidatePath("/admin");
    return { message: "Deleted Blog" };
  } catch (error) {
    return { message: "Database Error: Failed to delete blog" };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
    revalidatePath("/");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}

export async function logOut() {
  await signOut();
  revalidatePath("/");
  redirect("/");
}
