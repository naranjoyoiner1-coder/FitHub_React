import "./TrainerPage.css";
import trainerAvatar from "../../assets/IMG/trainer-avatar.png";
import Footer from "../../components/Footer";
import { FaChalkboardTeacher, FaCalendarCheck, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TrainerPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <div className="trainer-page">
      <header className="role-header trainer-header">
        <img src={trainerAvatar} alt="Entrenador" className="role-avatar" />
        <div className="role-info">
          <h2>Coach Yoiner</h2>
          <p>Entrenador Personal</p>
        </div>
      </header>

      <main className="role-main">
        <div className="dashboard-card">
          <FaChalkboardTeacher className="icon" />
          <h3>Mis Clases</h3>
        </div>
        <div className="dashboard-card">
          <FaCalendarCheck className="icon" />
          <h3>Agenda</h3>
        </div>
        <div className="dashboard-card">
          <FaUsers className="icon" />
          <h3>Mis Alumnos</h3>
        </div>
      </main>
      <button className="user-logout1" onClick={handleLogout}>
        Cerrar sesión
      </button>
      <Footer />
    </div>
  );
}


