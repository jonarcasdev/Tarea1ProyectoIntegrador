// src/components/Layout.jsx
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1>Mi Aplicación</h1>
      </header>

      {/* Contenido principal con menú lateral */}
      <div className="flex flex-1">
        <aside className="w-60 bg-gray-200 p-4">Menú lateral</aside>
        <main className="flex-1 p-4">
          <Outlet /> {/* Aquí se renderizan las páginas */}
        </main>
      </div>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Mi Aplicación
      </footer>
    </div>
  );
};

export default Layout;
