"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface INewsProps {
  judul: string;
  author: string;
  dibuat: string;
  url: string;
}

const News: React.FunctionComponent<INewsProps> = (props) => {
  const router = useRouter();
  return (
    <div
      className=" overflow-hidden min-w-[300px] min-h-[256px] md:max-w-[410px] md:max-h-[400px] flex flex-col  bg-gradient-to-r from-[#cacfd7] hover:from-[#cacfd7]/30 bg-red   rounded-md text-[#292570] text-left shadow-xl cursor-pointer relative  "
      onClick={() => router.push("/berita")}
    >
      <img src={props.url} alt="" />
      <div className=" flex-1 p-4">
        <h1 className=" font-semibold">{props.judul}</h1>
      </div>
      <div className=" flex-1 p-4 text-balance flex flex-col justify-end ">
        <h3 className=" text-xs ">{props.author}</h3>
        <h3 className=" text-xs">{props.dibuat}</h3>
      </div>
    </div>
  );
};

export default News;
