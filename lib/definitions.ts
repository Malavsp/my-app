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
  password: number;
};

export type CategoryField = {
  id: string;
  category: string;
};

export type Authorfield = {
  id: string;
  name: string;
};
