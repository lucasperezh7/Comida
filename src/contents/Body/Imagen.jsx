import React, { useEffect, useState } from "react";
import Imagen1 from "../../images/5.jpeg";
import "../../Styles/Style.css"; // Asegúrate de importar tus estilos CSS aquí

const Imagen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxValue = scrollPosition * 0.5; // Ajusta el valor para el efecto deseado

  return (
    <div className="parallax-section">
      <div
        className="parallax-image"
        style={{ transform: `translateY(${parallaxValue}px)` }}
      >
        <img src={Imagen1} alt="" />
      </div>
      <div className="content-container">
        <h1>Título del Contenido</h1>
      </div>
    </div>
  );
};

export default Imagen;
