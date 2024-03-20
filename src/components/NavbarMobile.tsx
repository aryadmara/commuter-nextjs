"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  const router = useRouter();
  return (
    <div className=" md:hidden w-full h-8 items-center justify-center border-b">
      <nav className=" flex justify-center items-center space-x-5 overflow-x-auto text-[#929499]  cursor-pointer">
        <a
          onClick={() => router.push("/")}
          className="  hover:text-[#c9c9c9] "
          href="#"
        >
          HOME
        </a>
        <a
          onClick={() => router.push("/profil")}
          className="  hover:text-[#c9c9c9]"
          href="#"
        >
          ABOUT US
        </a>
        <a
          onClick={() => router.push("/layanan")}
          className="  hover:text-[#c9c9c9]"
          href="#"
        >
          SERVICE
        </a>
        <a className="  hover:text-[#c9c9c9]" href="#">
          TEAM
        </a>
      </nav>
    </div>
  );
};

export default NavbarMobile;
