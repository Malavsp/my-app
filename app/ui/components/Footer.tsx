import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black pt-5">
      <Image src={"/blog/log.png"} width={40} height={30} alt="" />
      <p className="text-sm text-white">&copy;2024 All Right Reserved</p>
      <div className="flex">
        <Image
          src={"/blog/facebook-logo-facebook-icon-transparent-free-png.png"}
          alt=""
          height={30}
          width={40}
          className="m-2 rounded-lg"
        />
        <Image
          src={"/blog/twitter.png"}
          alt=""
          height={30}
          width={40}
          className="bg-white rounded-lg p-2 m-2"
        />
        <Image
          src={"/blog/google.png"}
          alt=""
          height={30}
          width={40}
          className="bg-white rounded-lg p-2 m-2"
        />
      </div>
    </div>
  );
};

export default Footer;
