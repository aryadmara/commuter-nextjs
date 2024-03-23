"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
//Flex 2
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const router = useRouter();
  return (
    <div className=" py-5 border ">
      <div className="flex flex-col md:flex-row mx-6 md:mx-40 my-0 md:my-20">
        <div className="flex-[2]  ">
          <img
            className="w=[132px] h-[48px]  mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_KAI_Commuter.svg/1024px-Logo_KAI_Commuter.svg.png"
            alt=""
          />
          <section className="flex mt-10 cursor-pointer space-x-3 justify-center">
            <TiSocialFacebook className=" w-8 h-8 rounded-full text-[#292570] " />
            <TiSocialTwitter className=" w-8 h-8  rounded-full text-[#292570] " />
            <TiSocialYoutube className=" w-8 h-8  rounded-full text-[#292570] " />
            <AiFillInstagram className=" w-8 h-8  rounded-full text-[#292570] " />
          </section>
        </div>
        <div className="flex-[2] space-y-3 font-semibold mt-6 md:mt-0 text-[#292570] ">
          <h2 className="flex">
            {" "}
            <FaLocationDot className="w-6 h-6 mr-4 " />
            Stasiun Juanda, Jl. Ir. H. Juanda I - Jakarta Pusat 10120 Indonesia
          </h2>
          <h2 className="flex">
            {" "}
            <BsFillTelephoneFill className="w-6 h-6 mr-4" />
            021-3453535
          </h2>
          <h2 className="flex ">
            <IoMdMail className="w-6 h-6 mr-4" /> E-mail Korespondensi Kantor
            Pusat : kaicommuter@krl.co.id
          </h2>
          <h2 className="flex">
            <BiSolidPhoneCall className="w-6 h-6 mr-4" /> Call center:
            121/021-121
          </h2>
          <h2 className="flex">
            <IoMdMail className="w-6 h-6 mr-4" /> E-mail Layanan Pelanggan :
            commuter.care@krl.co.id
          </h2>
        </div>
        <div className="hidden md:block flex-1 space-y-3  px-12 font-semibold text-[#292570]">
          <h1 className=" cursor-pointer" onClick={() => router.push("/")}>
            Home
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={() => router.push("/profil")}
          >
            About Us
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={() => router.push("/layanan")}
          >
            Services
          </h1>
          <h1 className=" cursor-pointer" onClick={() => router.push("/teams")}>
            Teams
          </h1>
        </div>
      </div>
      <h1 className=" mx-4 md:mx-40 text-center md:text-left  ">
        Copyright © 2022 - 2024 PT. Kereta Commuter Indonesia | All Rights
        Reserved
      </h1>
    </div>
  );
};

export default Footer;
