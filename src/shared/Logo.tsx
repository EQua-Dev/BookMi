import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <div className="flex flex-shrink-0 items-center border-r">
    <Link 
      href="/" 
      className={`px-4 py-2 text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300 ${className}`}
      style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} // Reflective shadow effect
    >
      Bookmi
    </Link>
  </div>
    // <Link
    //   href="/"
    //   className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    // >
    //   {/* <LogoSvgLight />
    //   <LogoSvg /> */}

    //   {/* THIS USE FOR MY CLIENT */}
    //   {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
     




      
    //   {/* {img ? (
    //     <img
    //       className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
    //       src={img}
    //       alt="Logo"
    //     />
    //   ) : (
    //     "Logo Here"
    //   )} */}
    //   {/* {imgLight && (
    //     <img
    //       className="hidden max-h-12 dark:block"
    //       src={imgLight}
    //       alt="Logo-Light"
    //     />
    //   )} */}
    // </Link>
  );
};

export default Logo;
