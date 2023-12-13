import React, { useState } from "react";
import Imagen1 from "../../images/5.jpeg";
import Imagen2 from "../../images/6.jpeg";
import Imagen3 from "../../images/7.jpeg";
import Siguiente from "../../assets/siguiente.svg";
import Anterior from "../..//assets/anterior.svg";
const Seccion = () => {
  const images = [Imagen1, Imagen2, Imagen3];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider flex relative pt-28 pb-28">
      <img
        className="rounded-md mx-auto" // Agregado mx-auto para centrar horizontalmente
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        style={{ width: "auto", height: "680px" }}
      />

      <div className="absolute left-80 top-1/2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={prevImage}
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img className="h-10 w-12" src={Anterior} alt="" />
        </button>
      </div>

      <div className="absolute right-80 top-1/2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={nextImage}
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img className="h-10 w-12" src={Siguiente} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Seccion;
