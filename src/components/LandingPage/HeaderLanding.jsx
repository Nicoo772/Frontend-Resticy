import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";

const HeaderLanding = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="bg-[--wine-color] z-20 text-white flex justify-between items-center py-5 md:py-2 px-8 lg:px-20 fixed flex w-full flex-wrap md:flex-nowrap">
        <i
          onClick={() => setShowMenu(!showMenu)}
          className="fa-solid fa-bars text-3xl md:hidden text-[--yellow-color]"
        ></i>
        <img
          className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] "
          src={logo}
          alt="Logo Resticy"
        />
        <button className="bg-transparent md:hidden text-[--wine-color] font-bold rounded-sm px-2 py-1"></button>
        <nav
          className={`md:px-10 py-5 md:py-0 md:pt-0 w-full md:flex-1 md:block ${
            !showMenu && "hidden"
          }`}
        >
          <ul className="flex gap-3 flex-col md:flex-row">
            <li>
              <a href="#home">Funcionalidades</a>
            </li>
            <li>
              <a href="#plans">Planes</a>
            </li>
            <li>
              <a href="#characteristics">Caracteristicas</a>
            </li>
          </ul>
          <div className="text-sm gap-3 flex md:hidden items-center pt-4">
            <Link
              to="/login"
              className="border border-1 border-[--yellow-color] text-white rounded px-4 py-2"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-[--yellow-color] text-white rounded px-4 py-2"
            >
              Registrarse
            </Link>
          </div>
        </nav>
        <div className="text-sm gap-3 hidden md:flex items-center justify-center">
          <Link
            to="/login"
            className="border border-1 border-[--yellow-color] text-white rounded px-4 py-2"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="bg-[--yellow-color] text-white rounded px-4 py-2"
          >
            Registrarse
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderLanding;
