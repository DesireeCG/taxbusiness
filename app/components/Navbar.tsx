import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logoazul from "../images/TaxBusiness_ 1C547F.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1C547F] p-4 pr-6 text-white relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoazul}
            alt="Logo de Taxbusiness - Soluciones fiscales"
            className="h-20 "
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 font-objectivity font-bold">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/chessTalent">Chess Talent</Link></li>
        </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 py-4 mt-4 bg-[#1C547F] text-center font-objectivity font-bold">
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
          <li><Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>
          <li><Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
          <li><Link to="/chessTalent" onClick={() => setOpen(false)}>Chess Talent</Link></li>
        </ul>
      )}
    </nav>
  );
}
