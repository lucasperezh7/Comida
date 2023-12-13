import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../Styles/Style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "bg-white transition-colors duration-500 opacity-60"
          : "bg-gray-950 transition-colors duration-500"
      } opacity-80 p-4 flex items-center fixed w-full top-6 z-50`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="hola"
            className="h-auto w-1/5 ml-16 object-cover rounded-full"
          />
        </Link>
      </div>
      <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-28 ml-2 font-semibold text-lg">
        <Link to="/" className={scrolled ? "text-slate-800" : "text-white"}>
          Enlace
        </Link>
        <Link to="/" className={scrolled ? "text-slate-800" : "text-white"}>
          Enlace
        </Link>
        <Link to="/" className={scrolled ? "text-slate-800" : "text-white"}>
          Enlace
        </Link>
        <Link to="/" className={scrolled ? "text-slate-800" : "text-white"}>
          Enlace
        </Link>
        <Link to="/" className={scrolled ? "text-slate-800" : "text-white"}>
          Enlace
        </Link>
      </div>
    </header>
  );
};

export default Header;
