// Hipertension.jsx
import React from 'react';
import './Hipertension.css';
import medvoxelLogo from "/src/assets/imagenes/Medvoxel.png";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Importa OrbitControls si lo necesitas
import { useGLTF } from '@react-three/drei'; // Importa useGLTF si lo necesitas
import { Heart1 } from '/src/assets/models-3d/Heart1.jsx';



const Hipertension= () => {
  return (
<div>
      <header>
        <div className="header-content">
          <div className="logo-nav">
            <img src={medvoxelLogo} alt="Logo de MedVoxel" width="150" />
            <nav>
              <a href="#">Inicio</a>
              <a href="#">Enfermedades</a>
              <a href="#">Quiz</a>
              <a href="#">Sobre nosotros</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="intro-content">

          <section className="enfermedades">
          <h1>Hipertension Arterial</h1>

          </section>

          

          <Canvas camera={{position:[5,0,2]}} style={{ height: '400px', width: '100%' }}>
            <OrbitControls/>
            <mesh>
              <Heart1/>
              <ambientLight intensity={0.4} />
              <directionalLight position={[1, 2, 1]} />
              
            </mesh>

          </Canvas>

          

        </div>
      </section>

      <section className="info">
        <div className="info-card">
          <p>
          La hipertensión arterial, también conocida como presión arterial alta, 
          es una condición médica en la que la presión que ejerce la sangre contra las 
          paredes de las arterias es constantemente más alta de lo normal. </p>
          <br/>
          <p> Esta presión es
           necesaria para que la sangre circule por el cuerpo, pero cuando se mantiene elevada 
           durante mucho tiempo, puede causar daños en el corazón, los vasos sanguíneos, el cerebro,
            los riñones y otros órganos.
          </p>
          <div className="heartbeat"></div>
        </div>
      </section>

      <section className="enfermedades">
        <h2></h2>
        <div className="cards">
          <div className="card">
            <h3>Sintomas</h3>
            <p>Ocurre cuando una arteria coronaria se bloquea, interrumpiendo el flujo de sangre al corazón y causando la muerte del tejido,
               lo que puede derivar en insuficiencia cardíaca o arritmias graves.</p>

            
          </div>
          
          <div className="card">
            <h3>Causas</h3>
            <p> Aumento crónico de la presión arterial, a menudo relacionado con dieta, estrés y genética.</p>
            
          </div>
          <div className="card" > 
            <h3>  Tratamiento</h3>
            <p>Medicación, dieta baja en sal, ejercicio.</p>
            
          </div>
        </div>
        <img src="virus.png" className="virus-icon" style={{ top: '10%', left: '5%' }} />
        <img src="virus.png" className="virus-icon" style={{ top: '50%', right: '10%' }} />
        <img src="virus.png" className="virus-icon" style={{ bottom: '20%', left: '15%' }} />
        <img src="virus.png" className="virus-icon" style={{ bottom: '5%', right: '20%' }} />
      </section>

      <footer>
        <div className="footer-content">
          <h3>Mapa del sitio</h3>
          <div className="footer-links">
            <div>
              <h4>Inicio</h4>
              <a href="#">Introducción</a>
            </div>
            <div>
              <h4>Enfermedades</h4>
              <a href="#">Enfermedad 1</a>
              <a href="#">Enfermedad 2</a>
              <a href="#">Enfermedad 3</a>
              <a href="#">Enfermedad 4</a>
            </div>
            <div>
              <h4>Quiz</h4>
              <a href="#">Ranking</a>
              <a href="#">Quiz</a>
            </div>
            <div>
              <h4>Sobre nosotros</h4>
              <a href="#">Equipo de trabajo</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Three.js */}
      <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/js/loaders/GLTFLoader.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/js/controls/OrbitControls.js"></script>
      <script src="script.js"></script>
    </div>
  );
};

export default Hipertension; // Exporta el componente por defecto
