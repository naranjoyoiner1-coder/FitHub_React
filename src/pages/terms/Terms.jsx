import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Terms.css';

function Terms() {
    return (
        <div>
            <Header />
            <section className="terms-container">
                <h1 className="terms-title">Términos y Condiciones</h1>
                <p className="terms-intro">Bienvenido a FitHub. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones:</p>
                <ul className="terms-list">
                    <li><strong>Uso de las instalaciones:</strong> Los usuarios deben respetar las normas de conducta y seguridad establecidas en cada sede. Esto incluye el uso adecuado de los equipos, mantener la limpieza y evitar comportamientos que puedan incomodar a otros usuarios.</li>
                    <li><strong>Horarios:</strong> Las instalaciones estarán disponibles según los horarios publicados en nuestra página web. Los horarios pueden variar en días festivos o por mantenimiento, y se notificará con antelación.</li>
                    <li><strong>Pagos:</strong> Las membresías deben ser pagadas puntualmente para evitar interrupciones en el servicio. Los pagos pueden realizarse a través de nuestros canales digitales o en las sedes físicas.</li>
                    <li><strong>Responsabilidad:</strong> FitHub no se hace responsable por lesiones o accidentes ocurridos dentro de las instalaciones. Se recomienda a los usuarios realizar un chequeo médico antes de iniciar cualquier actividad física.</li>
                    <li><strong>Cancelaciones:</strong> Las cancelaciones de membresías deben realizarse con al menos 15 días de anticipación. No se realizarán reembolsos por días no utilizados.</li>
                    <li><strong>Suspensiones:</strong> Los usuarios pueden solicitar la suspensión temporal de su membresía por motivos médicos o personales, presentando la documentación correspondiente.</li>
                    <li><strong>Entrenadores personales:</strong> Solo los entrenadores certificados por FitHub pueden ofrecer servicios dentro de las instalaciones. Está prohibido contratar entrenadores externos.</li>
                    <li><strong>Política de privacidad:</strong> La información personal de los usuarios será tratada de acuerdo con nuestra política de privacidad, disponible en nuestro sitio web.</li>
                    <li><strong>Modificaciones:</strong> FitHub se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán notificados a través de nuestros canales oficiales.</li>
                </ul>
                <p className="terms-closing">Para más información, por favor contáctanos a través de nuestros canales oficiales o consulta nuestra página web.</p>
            </section>
            <Footer />
        </div>
    )
}

export default Terms;