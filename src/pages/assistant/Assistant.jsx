import React, { useState } from "react";
import "./Assistant.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Assistant() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy tu asistente FitHub 🤖💪 ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // No necesitamos HF_API_TOKEN ni MODEL

  // Nueva función para simular la respuesta de la IA
  const simulateAIResponse = (userText) => {
    // Convertimos el texto a minúsculas para hacer la comparación más fácil
    const text = userText.toLowerCase();
    
    if (text.includes("hola") || text.includes("saludo")) {
      return "¡Hola! Me alegra verte. ¿Qué objetivo de fitness tienes para hoy? 💪";
    } else if (text.includes("ejercicio") || text.includes("rutina")) {
      return "Para una rutina de principiantes, te recomiendo 3 sets de 10 flexiones, 15 sentadillas y 1 minuto de plancha. ¡Empieza suave! 🏃‍♀️";
    } else if (text.includes("dieta") || text.includes("comer")) {
      return "Una buena dieta fitness debe ser rica en proteínas (para el músculo) y carbohidratos complejos (para la energía). Recuerda beber mucha agua. 💧";
    } else if (text.includes("gracias") || text.includes("ok")) {
      return "De nada, ¡estoy aquí para ayudarte a mantenerte Fit! 😊";
    } else {
      // Respuesta por defecto o aleatoria
      const genericResponses = [
        "Eso es interesante. ¿Puedes darme más detalles sobre tu entrenamiento?",
        "¿Podrías reformular tu pregunta? No la entendí bien.",
        "Mi conocimiento se centra en fitness y nutrición. ¿En qué más te puedo asistir?",
      ];
      const randomIndex = Math.floor(Math.random() * genericResponses.length);
      return genericResponses[randomIndex];
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Simular el tiempo de respuesta (por ejemplo, 1 segundo)
    setTimeout(() => {
      try {
        const botText = simulateAIResponse(userMessage.text);
        
        // Actualizar mensajes y detener la carga
        setMessages(currentMessages => [...currentMessages, { sender: "bot", text: botText }]);
      } catch (error) {
        console.error(error);
        setMessages(currentMessages => [...currentMessages, { sender: "bot", text: "¡Oops! Algo salió mal en la simulación. 😵" }]);
      } finally {
        setLoading(false);
      }
    }, 1000); // 1000 milisegundos = 1 segundo de espera

  };

  return (
    <div className="assistant-page">
    <Header />
      <h2 className="assistant-title">Asistente FitHub 🤖</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <p className="loading">⌛ Generando respuesta...</p>}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          Enviar
        </button>
      </div>
    <Footer />
    </div>
  );
}