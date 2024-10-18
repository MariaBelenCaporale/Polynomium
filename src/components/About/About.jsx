import "./styles.css";

const About = () => {
  return (
    <section className="sectionAbout" id="nosotros">
      <div className="contenedorAboutTotal">
        <div className="containerTextosAbout">
          <h3 className="tituloMiniAbout">¿QUIENES SOMOS?</h3>
          <h2 className="tituloAbout">Arquitectos de la tecnología futura</h2>
          <p className="textoAbout">
            Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en
            productos digitales asombrosos, desafiando los límites al crear
            productos tecnológicos que se adaptan a tu visión.
          </p>
        </div>
        <div className="contenedorColumnasAbout">
          <div className="contanedorMyV">
            <h3 className="misionVision">Nuestra visión</h3>
            <p className="textosMisionVision">
              Buscamos ser líderes en la creación de futuros digitales,
              impulsando a empresas y emprendedores hacia la innovación
              tecnológica. Nos comprometemos a que la tecnología sea accesible
              para todos, especialmente para las pequeñas empresas, brindando
              soluciones avanzadas que les permitan crecer y prosperar en un
              mercado en constante evolución.
            </p>
          </div>
          <div className="contanedorMyV">
            <h3 className="misionVision">Nuestra misión</h3>
            <p className="textosMisionVision">
              Proporcionamos soluciones tecnológicas innovadoras y accesibles
              que empoderan a empresas y emprendedores, facilitando su
              crecimiento y adaptación al mercado digital. Creamos plataformas
              que permiten a las empresas optimizar sus operaciones, expandir su
              alcance y transformar sus negocios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
