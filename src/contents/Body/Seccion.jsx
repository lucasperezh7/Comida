import React, { useState } from "react";
import Imagen1 from "../../images/1.jpeg";
import Imagen2 from "../../images/2.jpeg";
import Imagen3 from "../../images/3.jpeg";
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
    <div className="image-slider">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        style={{ width: "auto", height: "auto" }}
      />

      <button onClick={prevImage}>Anterior</button>
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
};

export default Seccion;
