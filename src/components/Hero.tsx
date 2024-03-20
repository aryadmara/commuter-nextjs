import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className=" bg-[url('https://commuterline.id/app/sam/assets/home/9849a56f6082de47887b618e564abdac.png')] flex flex-col   w-full h-[700px] bg-no-repeat bg-center  bg-cover border-b ">
      <div className="  px-6 md:px-40 py-20 text-center  md:text-left">
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
