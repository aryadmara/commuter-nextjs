"use client";
import { useState } from "react";
import * as React from "react";

interface IDestinationProps {
  tujuan: string;
  imageUrl: string;
}

const Destination: React.FunctionComponent<IDestinationProps> = (props) => {
  const [posisHover, setPosisiHover] = useState<boolean>(false);
  return (
    <div
      className=" flex flex-col justify-center    text-center items-center text-white bg-cover cursor-pointer relative "
      onMouseEnter={() => setPosisiHover(true)}
      onMouseLeave={() => setPosisiHover(false)}
    >
      <img
        className={`min-w-[320px] min-h-[256px] md:w-[320px] md:h-[240px]  transition-opacity ${
          posisHover ? `brightness-50 blur-sm` : ``
        }`}
        src={props.imageUrl}
        alt=""
      />
      <div
        className={`absolute md:transition-opacity duration-300 ${
          posisHover ? `opacity-100 ` : `opacity-0`
        }`}
      >
        <h1 className=" font-bold text-3xl md:text-2xl px-4 ">
          {props.tujuan}
        </h1>
      </div>
    </div>
  );
};

export default Destination;
