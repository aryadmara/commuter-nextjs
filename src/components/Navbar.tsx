"use client";
import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <section className="">
      <div className=" ">
        <header className=" px-6 md:px-40 py-4  w-full  m-auto left-0 right-0  flex items-center justify-between  text-[#929499] bg-white ">
          <div className=" bottom-40  md:bottom-4 right-4 fixed bg-[#ed6b1e] rounded-md p-4 z-50 cursor-pointer">
            <span className="  rounded-full">
              <a href="#">
                <IoIosArrowDropupCircle
                  className="  w-8 h-8 text-white"
                  onClick={scrollToTop}
                />
              </a>
            </span>
          </div>
          <h2 className=" pl-4 md:pl-0  text-2xl cursor-pointer ">
            <img
              className="w=[132px] h-[48px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_KAI_Commuter.svg/1024px-Logo_KAI_Commuter.svg.png"
              alt=""
              onClick={() => router.push("/")}
            />
          </h2>
          <nav className=" hidden md:block bg-opacity-100 text-xs text-[#292570] font-semibold ">
            <a
              className=" m-5 hover:text-[#c9c9c9] "
              href="#"
              onClick={() => router.push("/")}
            >
              HOME
            </a>
            <a className=" m-5 hover:text-[#c9c9c9]" href="#">
              ABOUT US
            </a>
            <a className=" m-5 hover:text-[#c9c9c9] group relative" href="#">
              SERVICES
              <ul className="absolute hidden group-hover:block bg-white text-[#ed6b1e] shadow-md rounded-md py-1 mt-2 w-96 border z-50">
                <li
                  onClick={() => router.push("/layanan")}
                  className=" border-b  cursor-pointer  px-4 py-2 hover:bg-[#292570] hover:text-white"
                >
                  Info Perjalanan
                </li>
                <li
                  onClick={() => router.push("/iklan")}
                  className="  cursor-pointer  px-4 py-2 hover:bg-[#292570] hover:text-white"
                >
                  Space Iklan
                </li>
              </ul>
            </a>
            <a className=" m-5 hover:text-[#c9c9c9]" href="#">
              TEAMS
            </a>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Navbar;
