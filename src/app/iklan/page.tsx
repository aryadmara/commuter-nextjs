"use client";
import * as React from "react";
import Destination from "@/components/CardIklan";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface IIklanProps {}

const Iklan: React.FunctionComponent<IIklanProps> = (props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col relative bg-gradient-to-r from-[#ed6b1e]">
        <img
          className="w-full object-none md:object-cover h-[250px] md:h-[500px] bg-no-repeat  bg-center  md:bg-cover border-b opacity-20"
          src="https://redigest.web.id/wp-content/uploads/2024/01/BB.jpeg"
          alt=""
        />
        <div className=" absolute px-6 md:px-40 py-20 text-center  md:text-left text-white">
          <h1 className=" text-2xl md:text-4xl  align-middle   ">
            Kereta Commuter Indonesia
          </h1>
          <h1 className=" mt-4 text-5xl md:text-7xl  align-middle  font-bold">
            Space
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-11 space-x-4  md:space-x-10 items-center ">
        <h2
          className=" bg-[#e7e9eb] py-4 px-4 md:px-10 text-[#2b3577] hover:text-white hover:bg-[#2b3577] font-bold rounded-xl  cursor-pointer"
          onClick={() => router.push("/layanan")}
        >
          Info Tarif Perjalanan
        </h2>
        <h2 className="  bg-[#2b3577] py-4  px-4 md:px-10 text-white font-bold rounded-xl cursor-pointer">
          Space Iklan
        </h2>
      </div>
      <div className="flex flex-col bg-[#e7e9eb] ">
        <div className="text-center mx-6 md:mx-60 my-20 space-y-10 text-[#292570]">
          <h2 className="text-4xl font-semibold ">Space Iklan</h2>
          <h4 className=" text-lg mx-6 md:mx-30 ">
            Kembangkan bisnis bersama KCI dengan mengandalkan Space Iklan di
            wilayah operasional KCI. Memasarkan produk akan lebih mudah di
            tempat yang strategis salah satunya adalah stasiun kereta api.
            Menurut data, setiap hari Commuterline mengangkut lebih dari 900
            ribu penumpang di mana ini bisa menjadi peluang baru untuk
            mengembangkan produk dan jasa melalui Space Iklan di wilayah
            operasional KCI.
          </h4>
        </div>
      </div>
      <div className=" py-5">
        <div className="mx-2 md:mx-20 ">
          <div className="  mx-4 md:mx-auto mb-10 flex md:grid flex-row md:grid-cols-4 gap-4 gap-y-10 overflow-x-auto">
            <Destination
              imageUrl="https://redigest.web.id/wp-content/uploads/2024/01/WhatsApp-Image-2021-02-26-at-10.31.43-AM-800x445.jpeg"
              tujuan="Train"
            />
            <Destination
              imageUrl="https://redigest.web.id/wp-content/uploads/2024/01/DVPojWMVQAAOBn8-2048x1366.jpg"
              tujuan="Pid / Passenger Information Display"
            />
            <Destination
              imageUrl="https://redigest.web.id/wp-content/uploads/2024/01/IDB.jpeg"
              tujuan="Interior Door Branding"
            />
            <Destination
              imageUrl="https://a-cdn.sindonews.net/dyn/732/content/2019/04/22/158/1397855/syuting-di-stasiun-mrt-film-bebas-adaptasi-box-office-korea-s2A-thumb.jpg"
              tujuan="Shooting/Activation"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-[380px] bg-gradient-to-l from-[#2b3577] relative">
        <img
          className=" w-full object-cover opacity-15"
          src="https://asset-2.tstatic.net/tribunnews/foto/bank/images/syuting-film-bebas.jpg"
          alt=""
        />
        <div className=" absolute top-12 mx-6 md:mx-32 px-6 md:px-10 py-5 text-center  md:text-left text-[#292570]  my-auto space-y-4 bg-white rounded-3xl md:max-w-[410px] md:max-h-[256px]">
          <h1 className=" font-bold text-2xl">Contact Us</h1>
          <h2 className="flex ">
            <IoMdMail className="w-6 h-6 mr-4" /> marketing-kci@krl.co.id
          </h2>
          <h2 className="flex">
            {" "}
            <BsFillTelephoneFill className="w-6 h-6 mr-4" />
            121
          </h2>

          <h2 className="flex">
            <BiSolidPhoneCall className="w-6 h-6 mr-4" /> Call center:
            121/021-121
          </h2>
          <h2 className="flex">
            {" "}
            <FaLocationDot className="w-6 h-6 mr-4 " />
            Stasiun Juanda, Jl. Ir. H. Juanda I - Jakarta Pusat 10120 Indonesia
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
