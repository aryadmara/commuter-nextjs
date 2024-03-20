import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className="flex flex-col  relative">
      <img
        className="w-full object-none md:object-cover h-[700px] bg-no-repeat  bg-center  md:bg-cover border-b"
        src="https://commuterline.id/app/sam/assets/home/9849a56f6082de47887b618e564abdac.png"
        alt="https://commuterline.id/app/sam/assets/home/9849a56f6082de47887b618e564abdac.png"
      />
      <div className=" absolute px-6 md:px-40 py-20 text-center  md:text-left">
        <h1 className=" text-2xl md:text-4xl  align-middle text-[#f80016]  ">
          Kereta Commuter Indonesia
        </h1>
        <h1 className=" mt-4 text-5xl md:text-7xl  align-middle text-[#f80016] font-bold">
          Menjelajah lebih <br /> mudah!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
