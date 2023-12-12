import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
