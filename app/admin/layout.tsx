import React from "react";
import Image from "next/image";
import assets from "@/public/blog/author-image.png";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border ">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets} width={40} alt="" height={10}></Image>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
