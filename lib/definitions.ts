export type Blog =   {
    id: number;
    title: string;
    description: string;
    image: string;
    date: number;
    category:string ;
    author: string;
    author_img: string;
    author_id:number
  };


export type User = { 
    id: number;
    name: string;
    email:string;
    password:number 
}  