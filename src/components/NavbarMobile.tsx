"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaTrain } from "react-icons/fa";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  const router = useRouter();
  return (
    <header className="px-0  md:px-40   w-full  bottom-0 right-0 fixed md:hidden    text-[#929499] bg-green border-t-2">
      <div className="w-full h-auto bottom-0 right-0 flex justify-around bg-white p-4 z-[999] cursor-pointer">
        <span className="  ">
          <a
            href="https://commuter-nextjs-rfh5.vercel.app/"
            className=""
            onClick={() => router.push("/")}
          >
            <IoMdHome className=" w-8 h-8 text-[#ed6b1e] hover:bg-gray-200 rounded-3xl" />
          </a>
        </span>
        <span className="  " onClick={() => router.push("/profil")}>
          <a href="https://commuter-nextjs-rfh5.vercel.app/profil">
            <FaPeopleRoof className="w-8 h-8 text-[#ed6b1e] hover:bg-gray-200 rounded-3xl" />
          </a>
        </span>
        <span className="  ">
          <a
            href="https://commuter-nextjs-rfh5.vercel.app/layanan"
            onClick={() => router.push("/layanan")}
          >
            <FaTrain className="w-8 h-8 text-[#ed6b1e] hover:bg-gray-200 rounded-3xl" />
          </a>
        </span>
      </div>
    </header>
  );
};

export default NavbarMobile;
