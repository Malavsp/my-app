export type Blog = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  author_id: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type CategoryField = {
  category: string;
};

export type Authorfield = {
  id: string;
  author: string;
  name: string;
};
