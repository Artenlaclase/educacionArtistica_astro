import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          Logo
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex gap-6 text-white md:static absolute top-full left-0 w-full bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/" className="block py-2 px-4 md:inline-block hover:bg-blue-700 md:hover:bg-transparent">
              Inicio
            </a>
          </li>
          <li>
            <a href="/about" className="block py-2 px-4 md:inline-block hover:bg-blue-700 md:hover:bg-transparent">
              Acerca de
            </a>
          </li>
          <li>
            <a href="/services" className="block py-2 px-4 md:inline-block hover:bg-blue-700 md:hover:bg-transparent">
              Servicios
            </a>
          </li>
          <li>
            <a href="/contact" className="block py-2 px-4 md:inline-block hover:bg-blue-700 md:hover:bg-transparent">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
