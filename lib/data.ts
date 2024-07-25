import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Blog } from "./definitions";

export async function fetchBlogById(id:number){
    noStore();
    console.log("fetching blog by id")
    try{
        const data = await sql<Blog>`
        SELECT * 
        FROM blog 
        WHERE id = ${id}`

        const blog = data.rows[0]
        console.log(' blog fetched ',data)
        return blog;

    }catch(error){
        console.error(`Error in fetching blog of id ${id}.` )
    }
}

export async function fetchAllBlogs(){
    noStore();
    try{
        const data = await sql<Blog>`SELECT * FROM blog`;

        // console.log('All blogs fetched ',data)
        
        return data.rows;

    }catch(error){
        console.error(`Error in fetching blogs.` )
        
    }
}