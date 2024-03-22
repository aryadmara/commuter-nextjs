import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className="flex flex-col relative bg-[#292570]">
      <img
        className="w-full object-none md:object-cover h-[700px] bg-no-repeat  bg-center  md:bg-cover border-b opacity-20"
        src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1280/v1577091470/djmpd9uwnmuez2fmnabk.jpg"
        alt=""
      />
      <div className=" absolute px-6 md:px-40 py-20 text-center  md:text-left text-white">
        <h1 className=" text-2xl md:text-4xl  align-middle   ">
          Kereta Commuter Indonesia
        </h1>
        <h1 className=" mt-4 text-5xl md:text-7xl  align-middle  font-bold">
          Menjelajah lebih <br /> mudah!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
