import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import medvoxelLogo from "./assets/imagenes/Medvoxel.png"; // Importamos el logo
import { toKebabCase } from "./utils";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

//const aboutPath = toKebabCase("About Page"); 
//console.log(aboutPath); // "about-page"

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <img src={medvoxelLogo} alt="Logo de MedVoxel" width="150" />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






