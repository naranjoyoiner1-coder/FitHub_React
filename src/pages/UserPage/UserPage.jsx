import "./UserPage.css";
import userAvatar from "../../assets/IMG/user-avatar.png";
import Footer from "../../components/Footer";
import { FaDumbbell, FaRegCalendarAlt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserPage() {

   const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="user-page">
      {/* HEADER */}
      <header className="role-header">
        <img src={userAvatar} alt="Usuario" className="role-avatar" />
        <div className="role-info">
          <h2>¡Hola, Salome!</h2>
          <p>Miembro desde: Enero 2024</p>
        </div>
      </header>

      {/* MAIN */}
      <main className="role-main">
        <div className="dashboard-card">
          <FaDumbbell className="icon" />
          <h3>Mis Rutinas</h3>
          <p>Consulta tus rutinas y progreso diario</p>
        </div>
        <div className="dashboard-card">
          <FaRegCalendarAlt className="icon" />
          <h3>Clases</h3>
          <p>Ver tu horario de clases</p>
        </div>
        <div className="dashboard-card">
          <FaChartLine className="icon" />
          <h3>Progreso</h3>
          <p>Gráficos de rendimiento y logros</p>
        </div>
      </main>
      <button className="user-logout1" onClick={handleLogout}>
        Cerrar sesión
      </button>
      <Footer />
    </div>
  );
}


