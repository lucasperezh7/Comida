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
          ? "bg-white transition-colors duration-500"
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
      <div className="flex space-x-28 ml-2 font-semibold text-lg">
        <Link
          to="/ruta1"
          className={scrolled ? "text-slate-800" : "text-white"}
        >
          Enlace 1
        </Link>
        <Link
          to="/ruta2"
          className={scrolled ? "text-slate-800" : "text-white"}
        >
          Enlace 2
        </Link>
        <Link
          to="/ruta3"
          className={scrolled ? "text-slate-800" : "text-white"}
        >
          Enlace 3
        </Link>
        <Link
          to="/ruta4"
          className={scrolled ? "text-slate-800" : "text-white"}
        >
          Enlace 4
        </Link>
        <Link
          to="/ruta5"
          className={scrolled ? "text-slate-800" : "text-white"}
        >
          Enlace 5
        </Link>
      </div>
    </header>
  );
};

export default Header;
