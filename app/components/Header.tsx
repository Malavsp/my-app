"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/ui/button";

const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <span className="w-[130px] sm:w-auto">BLOGS</span>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:test-5xl font-medium">Latest Blogs</h1>
        </div>
        {login ? (
          <Button className="flex items-center gap-2 font-medium py-1 px-3 ">
            <Link href="/login">Login</Link>
          </Button>
        ) : (
          <div className="flex items-center">
            <Button variant="outline">Logout</Button>
            <Button variant="link">
              <Link href="/create">Create Post</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
