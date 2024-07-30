const { db } = require("@vercel/postgres");
const { blogs, users } = require("../lib/placeholder-data.js");
require("dotenv").config();

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY ,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "user" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
          INSERT INTO users (name, email, password)
          VALUES (${user.name}, ${user.email}, ${user.password})
          ON CONFLICT (email) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedBlogs(client) {
  try {
    // Create "blog" table
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS blog(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    user_id INT NOT NULL DEFAULT 1, 
    CONSTRAINT fk_user
    FOREIGN KEY (user_id) REFERENCES users(id)
 );`;

    console.log('Created "blogs" table');

    // Insert data into "blogs" table
    const insertedBlogs = await Promise.all(
      blogs.map(
        (blog) => client.sql`
              INSERT INTO blog (title, description, date, category, author, user_id)
              VALUES (${blog.title}, ${blog.description}, ${blog.date}, ${blog.category}, ${blog.author}, ${blog.user_id})
              ON CONFLICT (id) DO NOTHING;`
      )
    );

    console.log(`Seeded ${insertedBlogs.length} blogs`);

    return {
      createTable,
      blogs: insertedBlogs,
    };
  } catch (error) {
    console.error("Error seeding blogs:", error);
    throw error;
  }
}

async function main() {
  console.log("Starting");
  const client = await db.connect();

  await seedUsers(client);
  await seedBlogs(client);

  await client.end();
}

main().catch((err) => {
  console.error("Error occurred while attempting to seed the database:", err);
});
