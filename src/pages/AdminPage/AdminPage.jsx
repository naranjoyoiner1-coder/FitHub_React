import "./AdminPage.css";
import adminAvatar from "../../assets/IMG/admin-avatar.png";
import Footer from "../../components/Footer";
import { FaUsersCog, FaChartPie, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <div className="admin-page">
      <header className="role-header admin-header">
        <img src={adminAvatar} alt="Admin" className="role-avatar" />
        <div className="role-info">
          <h2>Panel del Administrador</h2>
          <p>Bienvenido, Thomas (Admin)</p>
        </div>
      </header>

      <main className="role-main">
        <div className="dashboard-card">
          <FaUsersCog className="icon" />
          <h3>Gestión de Usuarios</h3>
        </div>
        <div className="dashboard-card">
          <FaChartPie className="icon" />
          <h3>Estadísticas</h3>
        </div>
        <div className="dashboard-card">
          <FaClipboardList className="icon" />
          <h3>Planes y Membresías</h3>
        </div>
      </main>
      <button className="user-logout1" onClick={handleLogout}>
        Cerrar sesión
      </button>

      <Footer />
    </div>
  );
}


