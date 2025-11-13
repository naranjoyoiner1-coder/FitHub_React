import './Footer.css'
import LogoInvertido from '../assets/IMG/logos/LogoFinalInvertido.png';
import FbIcon from '../assets/IMG/logos/Logo-Facebook.png';
import IgIcon from '../assets/IMG/logos/Logo-Instagram.png';
import XIcon from '../assets/IMG/logos/Logo-X.png';
import YtIcon from '../assets/IMG/logos/Logo-Youtube.png';
import TtIcon from '../assets/IMG/logos/Logo-TikTok.png';

function Footer() {
  const iconStyle = { width: '30px', height: '30px' };

  return (
    <footer>
      <img className="logo-principal" src={LogoInvertido} alt="" />
      <hr className="linea" />
      <p>Siguenos</p>

      <nav className="social-icons">
        <a href="https://www.facebook.com/SmartFitOficialColombia/" target="_blank" rel="noopener noreferrer">
          <img className="icons" src={FbIcon} alt="Facebook" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/smartfit/" target="_blank" rel="noopener noreferrer">
          <img className="icons" src={IgIcon} alt="Instagram" style={iconStyle} />
        </a>
        <a href="https://www.smartfit.com.co/" target="_blank" rel="noopener noreferrer">
          <img className="icons" src={XIcon} alt="X" style={iconStyle} />
        </a>
        <a href="https://www.youtube.com/smartfit" target="_blank" rel="noopener noreferrer">
          <img className="icons" src={YtIcon} alt="YouTube" style={iconStyle} />
        </a>
        <a href="https://www.tiktok.com/@smartfit" target="_blank" rel="noopener noreferrer">
          <img className="icons" src={TtIcon} alt="Tiktok" style={iconStyle} />
        </a>
      </nav>
      
      <hr className="linea" />

      {/* Aquí agregamos los links típicos de footer */}
      <nav className="footer-links" aria-label="Enlaces de navegación del pie de página">
        <a href="/us">Quiénes somos</a>
        <a href="/promociones">Promociones</a>
        <a href="/plans">Planes</a>
        <a href="#">Contacto</a>
        <a href="#">Preguntas frecuentes</a>
        <a href="/terms">Términos y condiciones</a>
        <a href="#">Contáctenos (PQRS)</a>
        <a href="#">Acceso a Proveedores</a>
        <a href="#">Políticas corporativas</a>
        <a href="#">Línea ética</a>
      </nav>

    </footer>
  );
}
export default Footer;