import React from 'react';
import './Home.css'; // Si tienes un archivo CSS
import medvoxelLogo from "/src/assets/imagenes/Medvoxel.png";


const Home = () => {
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
          <h1>El corazón</h1>
        </div>
      </header>

      <section className="intro">
        <div className="intro-content">
          <div className="model-container">
            <div id="model-3d"></div>
            <span className="model-tag">3D</span>
          </div>
          <p>¿Sabes cuáles son las enfermedades del corazón?</p>
          <button className="cta-button">Descúbrelo aquí</button>
        </div>
      </section>

      <section className="info">
        <div className="info-card">
          <p>
            El corazón es el órgano vital que impulsa la vida, pero también puede verse afectado por diversas enfermedades.
            ¿Sabías que algunas pueden ser silenciosas? Aprende a reconocer los síntomas a tiempo y cuida tu salud.
          </p>
          <div className="heartbeat"></div>
        </div>
      </section>

      <section className="enfermedades">
        <h2>Enfermedades</h2>
        <div className="cards">
          <div className="card">
            <h3>Enfermedad 1</h3>
            <p>Descripción corta.</p>
            <button className="card-button">Saber más</button>
          </div>
          <div className="card">
            <h3>Enfermedad 2</h3>
            <p>Descripción corta.</p>
            <button className="card-button">Saber más</button>
          </div>
          <div className="card">
            <h3>Enfermedad 3</h3>
            <p>Descripción corta.</p>
            <button className="card-button">Saber más</button>
          </div>
          <div className="card">
            <h3>Enfermedad 4</h3>
            <p>Descripción corta.</p>
            <button className="card-button">Saber más</button>
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

export default Home;
