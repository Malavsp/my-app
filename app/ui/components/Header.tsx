"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import Logout from "../logout";

const Header = ({ session }: { session: Boolean }) => {
  // const cookieStore = cookies();
  // const isLogin = cookieStore.has("authjs.session-token");
  const [isLogin, setIsLogin] = useState(session);

  useEffect(() => {
    setIsLogin(session);
  }, [session]);

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/" className="w-[130px] sm:w-auto">
          BLOGS
        </Link>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:test-5xl font-medium">Latest Blogs</h1>
        </div>
        {isLogin ? (
          <div className="flex items-center">
            <Logout />
            <Button variant="link">
              <Link href="/admin">Admin Panel</Link>
            </Button>
          </div>
        ) : (
          <Button className="flex items-center gap-2 font-medium py-1 px-3 ">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
