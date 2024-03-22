import * as React from "react";

interface ICardBudayaProps {
  huruf: string;
  subjudul: string;
  list1: string;
  list2: string;
  list3: string;
  gambar: string;
}

const CardBudaya: React.FunctionComponent<ICardBudayaProps> = (props) => {
  return (
    <div className=" flex flex-col md:flex-row w-[300px]  md:w-[1000px] md:h-[250px] px-2 py-5  bg-gradient-to-r from-[#e7e9eb] rounded-xl">
      <div className="relative flex-1 mt-4  pl-4">
        <img
          className="flex md:absolute  md:-top-2 w-[196px] object-contain "
          src={props.gambar}
          alt=""
        />
      </div>
      <div className="flex-[2] md:flex-[3] pl-6  md:pl-10 py-4 px-0 md:px-6 ">
        <h1 className=" text-3xl font-semibold">{props.huruf}</h1>
        <h3 className=" font-semibold text-xl mt-2">{props.subjudul}</h3>
        <ul className=" mt-4 list-decimal pl-4">
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardBudaya;
