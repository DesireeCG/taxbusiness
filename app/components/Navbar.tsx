import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import logoazul from "../images/Taxbusines-logo-fondoAzul.png";
import "../styles/navbar.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-[#2C2D5C] flex justify-between items-center p-4 text-white">
      <div>
        <img src={logoazul} alt="Logo de Taxbusiness - Soluciones fiscales" className="h-23" />
      </div>
      
      <ul className="hidden bg-[#2C2D5C] md:flex gap-6 font-bold">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

    {/* Mobile menu button */}
    <button className="md:hidden" onClick={() => setOpen(!open)}>
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
    {/* Mobile menu */}
      {open && (
        <ul className="absolute top-30 left-0 w-full bg-[#2C2D5C] text-center flex flex-col gap-4 py-6 md:hidden">
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
          <li><Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>
          <li><Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>
      )}

    </nav>
  );
}
