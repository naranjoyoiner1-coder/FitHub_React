import React, { useState, useEffect } from "react";
import "./Register.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const initialData = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  tipoDocumento: "",
  numeroDocumento: "",
  telefono: "",
  ciudad: "",
  direccion: "",
  correo: "",
  contrasena: "",
  aceptoTerminos: false,
};

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState(initialData);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validar / enviar
    console.log("Enviar datos:", form);
  }

  return (
    <div>
      <Header />
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="tittle_register">CREAR CUENTA</h2>

        <input
          className="register-input"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          type="text"
          placeholder="NOMBRE"
          required
        />

        <input
          className="register-input"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          type="text"
          placeholder="APELLIDO"
          required
        />

        <input
          className="register-input"
          name="fechaNacimiento"
          value={form.fechaNacimiento}
          onChange={handleChange}
          type="date"
          placeholder="FECHA DE NACIMIENTO"
          required
        />

        <div className="document-group">
          <select
            className="register-select"
            name="tipoDocumento"
            value={form.tipoDocumento}
            onChange={handleChange}
            required
          >
            <option value="">TIPO</option>
            <option value="CC">Cédula</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="PP">Pasaporte</option>
          </select>

          <input
            className="register-input"
            name="numeroDocumento"
            value={form.numeroDocumento}
            onChange={handleChange}
            type="text"
            placeholder="N° DOCUMENTO"
            required
          />
        </div>

        <input
          className="register-input"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          type="tel"
          placeholder="TELÉFONO MÓVIL"
          required
        />

        <select className="register-select" name="ciudad" value={form.ciudad} onChange={handleChange} required>
          <option value="">CIUDAD</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
          <option value="Cali">Cali</option>
        </select>

        <input
          className="register-input"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
          type="text"
          placeholder="DIRECCIÓN"
          required
        />

        <input
          className="register-input"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          type="email"
          placeholder="CORREO ELECTRÓNICO"
          required
        />

        <input
          className="register-input"
          name="contrasena"
          value={form.contrasena}
          onChange={handleChange}
          type="password"
          placeholder="CONTRASEÑA"
          required
        />

        <div className="terms">
          <label htmlFor="acepto">
            <input
              id="acepto"
              name="aceptoTerminos"
              type="checkbox"
              checked={form.aceptoTerminos}
              onChange={handleChange}
              required
            />
            <span>
              Al seleccionar esta casilla acepto los{" "}
              <a href="/terms">términos y condiciones</a> y{" "}
              <a href="#">políticas de tratamiento de datos</a>.
            </span>
          </label>
        </div>

        <button type="submit" className="pr">
          ¡Inscríbete ya!
        </button>
      </form>

      <Footer />
    </div>
  );
}

export default Register;