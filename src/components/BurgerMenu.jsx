import "./BurgerMenu.css";
import Logo from "../assets/IMG/logos/LogoFinal.png";
import UsuarioImg from "../assets/IMG/logos/Usuario.png";
import { useCallback, useEffect, useRef } from "react";
import initBurgerAnimation from "../helpers/animationBurgerMenu";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const goToRegister = useCallback(() => {
    // usa rutas relativas a la app; ajusta según tu enrutador si usas react-router
    window.location.href = "/register";
  }, []);

  const menuRef = useRef(null);

  useEffect(() => {
    const cleanup = initBurgerAnimation(menuRef.current);
    return () => cleanup && cleanup();
  }, []);

  return (
    <aside className="menu-container" ref={menuRef}>
      <input type="checkbox" id="menu-toggle" />

      <label className="menu-overlay" htmlFor="menu-toggle"></label>
      <label className="menu-icon" htmlFor="menu-toggle">
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </label>
      <nav className="menu">
        <label className="close-button" htmlFor="menu-toggle">
          X
        </label>
        <img src={Logo} alt="" />

        <div className="ImgUser">
          <img src={UsuarioImg} alt="User" />
          <a id="User" href="/login">
            usuarios
          </a>
          <a id="number" href="/login">
            <span style={{ color: "#868686" }}>rol</span>
          </a>
        </div>

        <div className="burgermenu-opcions">
          <Link to="/sedes">Sedes</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/quienes">Quienes Somos</Link>
          <Link to="/coaches">Entrenadores</Link>
          <Link to="/plans">Planes</Link>
          <Link to="/reviews">Reseñas</Link>
          <Link to="/assistant">IA</Link>
        </div>

        <button className="menu-cta" onClick={goToRegister}>
          ¡Inscríbete!
        </button>
      </nav>
    </aside>
  );
}
export default BurgerMenu;
