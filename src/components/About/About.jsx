import { useState, useEffect } from "react";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import "./styles.css";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t("Nuestra visión"),
      text: t("Buscamos ser líderes en la creación de futuros digitales, impulsando a empresas y emprendedores hacia la innovación tecnológica. Nos comprometemos a que la tecnología sea accesible para todos, especialmente para las pequeñas empresas, brindando soluciones avanzadas que les permitan crecer y prosperar en un mercado en constante evolución.")
    },
    {
      title: t("Nuestra misión"),
      text: t("Proporcionamos soluciones tecnológicas innovadoras y accesibles que empoderan a empresas y emprendedores, facilitando su crecimiento y adaptación al mercado digital. Creamos plataformas que permiten a las empresas optimizar sus operaciones, expandir su alcance y transformar sus negocios.")
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="sectionAbout" id="nosotros">
      <div className="contenedorAboutTotal">
        <div className="containerTextosAbout">
          <h3 className="tituloMiniAbout">{t("¿QUIENES SOMOS?")}</h3>
          <h2 className="tituloAbout">{t("Arquitectos de la tecnología futura")}</h2>
          <p className="textoAbout">
            {t("Polynomium es el lienzo en blanco para tus ideas, convirtiéndolas en productos digitales asombrosos, desafiando los límites al crear productos tecnológicos que se adaptan a tu visión.")}
          </p>
        </div>
        <div className="contenedorColumnasAbout">
          <div className="contenedorMyV">
            {!isMobile ? (
              slides.map((slide, index) => (
                <div key={index} className="slide">
                  <h3 className="misionVision">{slide.title}</h3>
                  <p className="textosMisionVision">{slide.text}</p>
                </div>
              ))
            ) : (
              <>
                <h3 className="misionVision">{slides[currentSlide].title}</h3>
                <p className="textosMisionVision">{slides[currentSlide].text}</p>
              </>
            )}
          </div>
        </div>
        {isMobile && (
          <div className="sliderControls">
            <button className="sliderButton" onClick={prevSlide}> <KeyboardArrowLeftRoundedIcon /> </button>
            <button className="sliderButton" onClick={nextSlide}> <KeyboardArrowRightRoundedIcon /> </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
  