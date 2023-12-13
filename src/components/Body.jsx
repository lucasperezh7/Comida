import React from "react";
import Video from "../contents/Body/Video";
import Containers from "../contents/Body/Containers";
import Titulo from "../contents/Body/Titulo";
import Seccion from "../contents/Body/Seccion";
import Imagen from "../contents/Body/Imagen";

const Body = () => {
  return (
    <>
      <Video />
      <Titulo />
      <Containers />
      <Seccion />
      <Imagen />
      <Containers />
      <div></div>
    </>
  );
};

export default Body;
