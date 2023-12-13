import React from "react";
import Duna from "../../images/comida.mp4";

function Video() {
  return (
    <div className="lg: mx-auto" style={{ position: "relative" }}>
      <video src={Duna} autoPlay loop muted></video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Tu Texto Aquí</h1>
        <p>Descripción o cualquier otro texto que desees agregar</p>
      </div>
    </div>
  );
}

export default Video;
