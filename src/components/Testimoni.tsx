import * as React from "react";
import { PiQuotesFill } from "react-icons/pi";

interface ITestimoniProps {
  nama: string;
  testimoni: string;
  gambar: string;
  kerja: string;
}

const Testimoni: React.FunctionComponent<ITestimoniProps> = (props) => {
  return (
    <div className="min-w-[300px] min-h-[256px] md:max-w-[410px] md:max-h-[256px] bg-[#292570]  p-4 rounded-md text-white text-left shadow-xl relative">
      <div className="text-[#ed6b1e]">
        <PiQuotesFill className="w-8 h-8 text-[#ed6b1e] absolute bottom-4 right-4" />
      </div>
      <div className="flex">
        <img src={props.gambar} alt="" className="h-20 w-20  rounded-md" />
        <div className="mx-4">
          <h4 className=" text-lg font-bold my-2 ">{props.nama}</h4>
          <p className=" text-sm font-extralight my-2 ">{props.kerja}</p>
        </div>
      </div>
      <p className=" text-sm  mt-4">{props.testimoni}</p>
    </div>
  );
};

export default Testimoni;
