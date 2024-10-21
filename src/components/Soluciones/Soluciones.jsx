import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useTranslation } from 'react-i18next';

const Soluciones = () => {
  const { t } = useTranslation();

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
            <h2 className="tituloSoluciones">{t("Soluciones")}</h2>
            <p className="textoSoluciones">
              {t("Desarrollamos soluciones de software específicas para nuestros clientes y creamos productos tecnológicos propios.")}
            </p>
          </div>
          <div className="contenedorBotonesSolu">
            <button
              className="btnSolucion"
              onClick={() => handleClick("soluciones")}
            >
              {t("Soluciones para empresas")}
              <span
                className={`lineaSoluciones ${
                  activeText === "soluciones" ? "activo" : ""
                }`}
              ></span>
            </button>
            <button
              className="btnSolucion"
              onClick={() => handleClick("productos")}
            >
              {t("Nuestros productos")}
              <span
                className={`lineaSoluciones ${
                  activeText === "productos" ? "activo" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        <div className="solucionesDos">
          {activeText === "soluciones" && (
            <div className="extraText">
              
                <p className="textoClickSoluciones">
                  <span className="titulo">
                    {t("Haciendo Realidad tus Sueños Tecnológicos")}
                  </span>
                  <br />
                  {t("¿Tenés una visión ambiciosa? En Polynomium, colaboramos con vos para transformar tus ideas en soluciones digitales innovadoras, acompañándote en cada paso del proceso, desde la concepción hasta su implementación final. ¡Creamos tecnología que impulsa tu éxito! Software Personalizado Convertimos tus ideas en soluciones tecnológicas y las diseñamos basándonos en las necesidades únicas de tu negocio. Desde la optimización de procesos internos, gestión de contenidos eficientes, hasta la automatización de tareas críticas. En Polynomium te ayudamos a operar con mayor agilidad y eficacia a través del desarrollo personalizado de plataformas integrales que se adaptan a tu negocio.")}
                </p>
           
            </div>
          )}

          {activeText === "productos" && (
            <div className="extraText">
              <p className="textoClickSoluciones">
                {t("Empodera tu negocio con herramientas que mejoran la eficiencia y te permiten enfocarte en lo que realmente importa: Crecer.")}
              <br></br>
                <span className="titulo">{t("Nuestros desarrollos")} </span>
                {t("Cada uno de nuestros productos están pensados y diseñado para ser aplicados en los desarrollos de nuestros clientes en caso de querer hacer crecer sus proyectos existentes. O de igual manera en el caso de querer emprender desde cero brindamos la tecnología como una white label capaz de ser usada de manera independiente con la estética y cualidades agregadas a pedido, según tu necesidad.")}
              <br></br>
                <span className="titulo">
                  {t("Plataformas responsivas web y moviles")}
                </span>
                {t("Nuestras soluciones son rápidas, responsivas y completamente optimizadas para ofrecer una experiencia de usuario fluida en cualquier dispositivo.")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;