
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import medvoxelLogo from "./assets/imagenes/Medvoxel.png";
import { toKebabCase } from "./utils";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar"; // Importamos Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Modelos3D from "./pages/Modelos3D"; // Importamos Modelos3D
import Hipertension from "./pages/Hipertension"; // Importamos Hipertension



function App() {
  const [count, setCount] = useState(0);

  // const aboutPath = toKebabCase("About Page");
  // console.log(aboutPath); // "about-page"

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", padding: "10px" }}>
      <img src={medvoxelLogo} alt="Logo de MedVoxel" width="150" />
      </div>

      <Navbar /> {/* Mostramos Navbar aquí */}

      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="modelos3d" element={<Modelos3D />} />
           
          
        </Route>
        <Route path="hipertension" element={<Hipertension />} />

        
        
      </Routes>
    </BrowserRouter>
  );
}export default App;