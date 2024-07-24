import { fetchBlogById } from "@/lib/data";
import React from "react";
import { blogs } from "@/lib/placeholder-data";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  //   const data = await fetchBlogById(id);
  const data = blogs[Number(id) - 1];
  //   console.log(data);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="mx-auto text-2xl sm:text-5xl font-semibold max-w-[700px]">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={500}
          height={400}
          alt=""
          //   style={{ height:}}
          className="border-4 border-white mx-auto"
        ></Image>
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1 : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Placeat, nobis.
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2 : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Placeat, nobis.
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3 : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Placeat, nobis.
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          For Conclusion : Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Placeat, nobis.
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          consequuntur alias dolores fugiat quaerat corporis quis quos quasi
          quas numquam?
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div
            className="flex
          "
          >
            <Image
              src={"/blog/facebook-logo-facebook-icon-transparent-free-png.png"}
              alt=""
              height={30}
              width={40}
              className="bg-black rounded-lg p-2"
            />
            <Image
              src={"/blog/twitter.png"}
              alt=""
              height={30}
              width={40}
              className="bg-white rounded-lg p-2 "
            />
            <Image
              src={"/blog/google.png"}
              alt=""
              height={30}
              width={40}
              className="bg-white rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;
