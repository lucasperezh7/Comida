// Containers.js
import React from "react";
import "../../Styles/Style.css";
import Image1 from "../../images/1.jpeg";
import Image2 from "../../images/2.jpeg";
import Image3 from "../../images/3.jpeg";
import Image4 from "../../images/4.jpeg";
const Containers = () => {
  return (
    <div className="containers">
      <div id="container1" class="container">
        <div>
          <div
            id="elemento1"
            className="bg-gray-200 p-4 grid grid-cols-2 gap-4 transform hover:scale-105 transition-transform rounded-xl"
          >
            <div class="col-span-1">
              <img
                id="imagen1"
                src={Image1}
                alt="Descripción de la imagen"
                className="rounded-xl"
              />
            </div>
            <div class="col-span-1">
              <h2 class="text-xl font-bold mb-2">
                Retiros de aprendizaje instrosprectivo
              </h2>
              <p class="text-gray-600">Descripción o texto aquí.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            id="elemento2"
            class="bg-gray-200 p-4 grid grid-cols-2 gap-4 mt-12 transform hover:scale-105 transition-transform rounded-xl"
          >
            <div class="col-span-1">
              <h2 class="text-xl font-bold mb-2">
                Años de experiencia a tu servicio
              </h2>
              <p class="text-gray-600">Descripción o texto aquí.</p>
            </div>
            <div class="col-span-1">
              <img
                id="imagen2"
                src={Image2}
                alt="Descripción de la imagen"
                class="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="container2">
        <div>
          <div
            id="elemento3"
            className="bg-gray-200 p-4 grid grid-cols-2 gap-4 transform hover:scale-105 transition-transform rounded-xl"
          >
            <div class="col-span-1">
              <img
                id="imagen3"
                src={Image3}
                alt="Descripción de la imagen"
                class="w-full h-auto rounded-xl"
              />
            </div>
            <div class="col-span-1">
              <h2 class="text-xl font-bold mb-2">
                Retiros de aprendizaje instrosprectivo
              </h2>
              <p class="text-gray-600">Descripción o texto aquí.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            id="elemento4"
            className="bg-gray-200 p-4 grid grid-cols-2 gap-4 transform hover:scale-105 transition-transform rounded-xl"
          >
            <div class="col-span-1">
              <img
                id="imagen4"
                src={Image4}
                alt="Descripción de la imagen"
                class="w-full h-auto rounded-xl"
              />
            </div>
            <div class="col-span-1">
              <h2 class="text-xl font-bold mb-2">
                Retiros de aprendizaje instrosprectivo
              </h2>
              <p class="text-gray-600">Descripción o texto aquí.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containers;
