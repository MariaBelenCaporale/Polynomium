import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Soluciones = () => {
    const [activeText, setActiveText] = useState("soluciones");
    const navigate = useNavigate();
  
    const handleClick = (text, path) => {
      setActiveText(text);
      navigate(path);
    };
  
    return (
      <section className="sectionSoluciones">
        <div className="contenedorSolucionesTotal">
          <div className="solucionesUno">
            <div className="contenedorSolucionTexto">
              <h2 className="tituloSoluciones">Soluciones</h2>
              <p className="textoSoluciones">
                Desarrollamos soluciones de software específicas para nuestros
                clientes y creamos productos tecnológicos propios.
              </p>
            </div>
            <div className="contenedorBotonesSolu">
              <button
                className='btnSolucion'
                onClick={() => handleClick("soluciones")}
              >
                Soluciones para empresas
                <span className={`lineaSoluciones ${activeText === "soluciones" ? "activo" : ""}`}></span>
              </button>
              <button
                className='btnSolucion'
                onClick={() => handleClick("productos")}
              >
                Nuestros productos
                <span className={`lineaSoluciones ${activeText === "productos" ? "activo" : ""}`}></span>
              </button>
            </div>
          </div>

        <div className="solucionesDos">
          {activeText === "soluciones" && (
            <div className="extraText">
              <p className="textoClickSoluciones">
              <p className="textoClickSoluciones">
    <span className="titulo">Haciendo Realidad tus Sueños Tecnológicos</span><br />
    ¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar
    tus ideas en soluciones digitales innovadoras, acompañándote en
    cada paso del proceso, desde la concepción hasta su
    implementación final. ¡Creamos tecnología que impulsa tu éxito!
    Software Personalizado Convertimos tus ideas en soluciones
    tecnológicas y las diseñamos basándonos en las necesidades
    únicas de tu negocio. Desde la optimización de procesos
    internos, gestión de contenidos eficientes, hasta la
    automatización de tareas críticas. En Polynomium te ayudamos a
    operar con mayor agilidad y eficacia a través del desarrollo
    personalizado de plataformas integrales que se adaptan a tu
    negocio.
</p>

              </p>
            </div>
          )}

          {activeText === "productos" && (
            <div className="extraText">
              <p className="textoClickSoluciones">
                Nuestros Productos Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
