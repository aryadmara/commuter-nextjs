"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  const router = useRouter();
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = () => {
    // setFromStation("Ancol");
    // setToStation("Bekasi");
    setPrice("3000"); //
  };
  return (
    <div className=" bg-[#f0f2f4]  ">
      <div className="flex flex-col relative bg-gradient-to-r from-[#ed6b1e]">
        <img
          className="w-full object-none md:object-cover h-[250px] md:h-[500px] bg-no-repeat  bg-center  md:bg-cover border-b opacity-20"
          src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1641464523/no4imzbaoz9xlebbduqj.jpg"
          alt=""
        />
        <div className=" absolute px-6 md:px-40 py-20 text-center  md:text-left text-white">
          <h1 className=" text-2xl md:text-4xl  align-middle   ">
            Kereta Commuter Indonesia
          </h1>
          <h1 className=" mt-4 text-5xl md:text-7xl  align-middle  font-bold">
            Services
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-11 space-x-4  md:space-x-10 items-center">
        <h2 className=" bg-[#2b3577] py-4  px-4 md:px-10 text-white font-bold rounded-xl cursor-pointer">
          Info Perjalanan
        </h2>
        <h2
          className=" bg-white py-4 px-4 md:px-10 text-[#2b3577] hover:text-white hover:bg-[#2b3577] font-bold rounded-xl  cursor-pointer"
          onClick={() => router.push("/iklan")}
        >
          Space Iklan
        </h2>
      </div>
      <div className="mx-6 md:mx-40  bg-red-500 rounded-2xl flex flex-col  md:flex-row ">
        <div className=" py-6  flex-1 order-2 md:order-1">
          <form action="#" className=" mx-5   rounded-lg ">
            <select
              id="fromStation"
              name="fromStation"
              className="rounded-full py-3 w-[300px] md:w-[400px] pl-4 mt-2 text-sm"
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className=" text-gray-300"
              >
                Dari Stasiun Mana?
              </option>
              <option value="ANCOL">Ancol</option>
              <option value="BOGOR">Bogor</option>
              <option value="SENAYAN">Senayan</option>
              <option value="BEKASI">Bekasi</option>
            </select>
          </form>
          <form action="#" className=" mx-5 space-y-5  rounded-lg ">
            <select
              id="toStation"
              name="toStation"
              className="rounded-full py-3 w-[300px] md:w-[400px] pl-4 mt-4 mb-4 text-sm"
              value={toStation}
              onChange={(e) => setToStation(e.target.value)}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className=" text-gray-300"
              >
                Ke Stasiun Mana?
              </option>
              <option value="ANCOL">Ancol</option>
              <option value="BOGOR">Bogor</option>
              <option value="SENAYAN">Senayan</option>
              <option value="BEKASI">Bekasi</option>
            </select>
          </form>
          <div className="mx-5 text-white ">
            <button
              className=" bg-[#2b3577] rounded-full py-2 px-[5vw]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="  flex-1 flex justify-center items-center pt-6 md:pt-0 order-1 md:order-2">
          <img
            src="https://commuterline.id/img/icon%20kereta.png"
            alt=""
            className=" text-center  -blue-800"
          />
        </div>
      </div>
      <div className="mx-6 md:mx-40  bg-white  flex ">
        <div className="  flex-1 flex items-center my-10 mx-4 md:mx-20">
          <img
            src="https://commuterline.id/img/kmt.png"
            alt=""
            className=" text-center  -blue-800"
          />
        </div>
        <div className="flex-1   my-10 mx-4 md:mx-20">
          <h1 className=" font-bold text-black text-lg md:text-2xl">
            {fromStation} - {toStation}
          </h1>
          <h1 className=" my-5 md:my-10 font-bold text-red-700 text-3xl md:text-5xl  -blue-800">
            Rp.{price}
          </h1>
        </div>
      </div>
      {/* SERVICE AWAL */}
      <div className="text-[#292570]">
        <h1 className="mx-6 md:mx-40 my-6 md:my-10 text-3xl font-semibold px-10">
          PETA PERJALANAN
        </h1>
        <div className="mx-6 md:mx-40 my-10 grid grid-cols-1 md:grid-cols-2 ">
          <div className="  flex justify-center items-center text-center">
            <img
              onClick={() =>
                (window.location.href =
                  "https://banner-access.krl.co.id/banner-access/assets/maps/fea09327d5c8f9b89cfc2787503078f7.png")
              }
              className="w-[90vw] md:w-[30vw] object-contain"
              src="https://banner-access.krl.co.id/banner-access/assets/maps/ce5f644e204ee3c8f90cae078a9fb7e1.png"
              alt=""
            />
          </div>
          <div className="py-4 md:py-0 flex justify-center items-center text-center">
            <img
              onClick={() =>
                (window.location.href =
                  "https://banner-access.krl.co.id/banner-access/assets/maps/fea09327d5c8f9b89cfc2787503078f7.png")
              }
              className="w-[90vw] md:w-[30vw] object-contain"
              src="https://banner-access.krl.co.id/banner-access/assets/maps/fea09327d5c8f9b89cfc2787503078f7.png"
              alt=""
            />
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center text-center">
            <img
              onClick={() =>
                (window.location.href =
                  "https://banner-access.krl.co.id/banner-access/assets/maps/1cc8581f806f35fee29c2feeb3ca19a5.png")
              }
              className="w-[90vw] md:w-[30vw] object-contain"
              src="https://banner-access.krl.co.id/banner-access/assets/maps/1cc8581f806f35fee29c2feeb3ca19a5.png"
              alt=""
            />
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center text-center">
            <img
              onClick={() =>
                (window.location.href =
                  "https://banner-access.krl.co.id/banner-access/assets/maps/dbade8879aa81fbbccaf8d6375ac894b.png")
              }
              className="w-[90vw] md:w-[30vw] object-contain"
              src="https://banner-access.krl.co.id/banner-access/assets/maps/dbade8879aa81fbbccaf8d6375ac894b.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* SERVICE AKHIR */}
      <div id="services" className=" bg-white  mt-6">
        <div className=" flex flex-col md:flex-row mx-6 md:mx-40   pt-10 font-semibold  -blue-800">
          <div className="hidden md:block flex-[2]  py-10 px-10">
            <h1 className=" text-3xl md:text-3xl pt-4 text-[#292570] ">
              KEBIJAKAN PRIVASI C-ACCESS
            </h1>
            <h3 className="  text-[#ed6b1e] mt-4 ">
              Mulai dari 13 September 2022, kebijakan Privasi ini menjelaskan
              bagaimana KCI (PT Kereta Commuter Indonesia dan
              afiliasi-afiliasinya, atau “Kami”) melindungi terhadap perolehan,
              pengumpulan, pengolahan, penganalisisan, penyimpanan, penampilan,
              pengumuman, pengiriman, penyebarluasan, dan pemusnahan Informasi
              Pribadi anda melalui penggunaan produk (“Aplikasi”) dan layanan
              lainnya milik Kami yang dioperasikan menggunakan Aplikasi
              C-Access. Informasi Pribadi adalah data perseorangan tertentu yang
              disimpan, dirawat, dan dijaga kebenaran serta dilindungi
              kerahasiaannya. <br /> <br />
              Kami akan melakukan perolehan, pengumpulan, pengolahan,
              penganalisisan, penyimpanan, penampilan, pengumuman, pengiriman,
              penyebarluasan, dan pemusnahan Informasi Pribadi adalah data
              perseorangan anda sesuai dengan persetujuan terlebih dahulu dari
              anda. Kebijakan Privasi ini berlaku apabila anda menggunakan
              layanan Aplikasi, atau bagian apa pun dari Aplikasi. <br /> <br />
              Mohon agar dapat dibaca mengenai pengaturan Kebijakan Privasi ini
              dengan seksama untuk memastikan anda memahami bagaimana proses
              pengolahan data Kami. Kecuali didefinisikan lain, semua istilah
              dengan huruf kapital yang digunakan dalam Kebijakan Privasi ini
              memiliki arti yang sama dengan yang tercantum dalam Ketentuan
              Penggunaan.
            </h3>
          </div>
          <div className=" flex-1  flex flex-col justify-center">
            <img
              className=" flex justify-center"
              src="https://commuterline.id/app/sam/assets/home/746ee3444a870a23929b60f0f1e4096a.png"
              alt=""
            />
            <div className="flex justify-center mb-4">
              <img
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.kci.access&hl=en_US")
                }
                className=" justify-center items-center text-center mt-4 cursor-pointer"
                src="https://commuterline.id/app/sam/assets/images/ac70ce07ac0616502090352789b6f44b.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
