import "./Home.css";
import Header from "../../components/Header";
import { useEffect, useRef, useCallback } from 'react';
import initCarousel from '../../helpers/carousel';
import Footer from "../../components/Footer";
import Video1 from '../../assets/VIDEOS/video1.mp4';
import Video2 from '../../assets/VIDEOS/video2.mp4';
import Video3 from '../../assets/VIDEOS/video3.mp4';
import { useNavigate } from 'react-router-dom'

function Home() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = initCarousel(carouselRef.current);
    return () => cleanup && cleanup();
  }, []);

  const goToPlans = useCallback(() => {
    navigate('/plans');
  }, [navigate]);

  const openFullscreen = useCallback((card) => {
    if (!card) return;
    const video = card.querySelector && card.querySelector('video');
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-wrapper">
          <div className="carousel-holder">
            <div id="slide-1" className="slide"></div>
            <div id="slide-2" className="slide"></div>
            <div id="slide-3" className="slide"></div>
            <div id="slide-4" className="slide"></div>
          </div>
        </div>

        {/* Flechas de navegación  */}
        <button className="arrow left">&#10094;</button>
        <button className="arrow right">&#10095;</button>
      </div>
  <h1 className="home-title">Elegir Planes y <span className="home-diferent">Entra ¡YA!</span></h1>

  
<section className="cards-contect">
  <div className="cards-contect">
    {/* Lado frontal */}
    <div className="cards-contect-front">
      <img src="/src/assets/IMG/imagen-editada.jpg" alt="Plan Fitness" className="card-bg" />
      <h1>Plan Fitness</h1>
    </div>

    {/* Lado trasero */}
    <div className="cards-contect-back">
      <div className="cards-contect-info">
        <h3>Planes de  <span> Entrenamiento </span> </h3>
        <p>•Descubre nuestros planes diseñados para adaptarse a tus metas fitness.</p>
        <p>•Desde acceso básico a todas las sedes hasta experiencias exclusivas con beneficios premium.</p>
        <p>•Elige el plan que mejor se ajuste a tu estilo de vida y alcanza tus objetivos con nosotros.</p>
        <a href="#" className="buttonPlan" onClick={goToPlans}>¡Ver Más!</a>
      </div>
    </div>
  </div>
</section>


    <h1 className="home-title">Activa <span className="home-diferent">tu mejor versión</span></h1>

    <div className="video-collage">
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="video-text">FUERZA</div>
      </div>
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="video-text">DISCIPLINA</div>
      </div>
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video3} type="video/mp4" />
        </video>
        <div className="video-text">ENERGÍA</div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
