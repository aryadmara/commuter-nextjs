import * as React from "react";

interface IDestinationProps {
  tujuan: string;
  imageUrl: string;
}

const Destination: React.FunctionComponent<IDestinationProps> = (props) => {
  return (
    <div
      className=" flex flex-col justify-center min-w-[300px] min-h-[256px] md:max-w-[410px] md:max-h-[256px]  text-center items-center text-white bg-cover cursor-pointer "
      style={{ backgroundImage: `url('${props.imageUrl}')` }}
    >
      <div className="">
        <h1 className=" font-bold text-2xl px-4 ">{props.tujuan}</h1>
      </div>
    </div>
  );
};

export default Destination;
