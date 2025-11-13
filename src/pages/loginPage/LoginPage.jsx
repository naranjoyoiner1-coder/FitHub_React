import "./LoginPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import users from "../../data/users.json";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin");
      else if (user.role === "trainer") navigate("/trainer");
      else navigate("/user");
    } else {
      setError("Correo o contraseña incorrectos 😥");
    }
  };

  return (
    <div>
      <Header />
      <main className="centro">
        <div className="login-container">
          <h2 className="tittel_login">INICIAR SESIÓN</h2>
          <input
            className="ema"
            type="email"
            placeholder="CORREO ELECTRÓNICO"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pas"
            type="password"
            placeholder="CONTRASEÑA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-ingresar" onClick={handleLogin}>
            INGRESAR
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Link to="/register" className="olvidar">
            Olvidé mi contraseña
          </Link>
          <Link to="/register" className="ol">
            CREAR CUENTA
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;

