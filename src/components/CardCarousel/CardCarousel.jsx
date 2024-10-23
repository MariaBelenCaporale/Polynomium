import PropTypes from "prop-types";
import "./styles.css";
import ButtonFirst from "../ButtonFirst/ButtonFirst";
import Roca from "../../images/roca.png";

const CardCarousel = ({
  miniTitulo,
  titulo,
  textoUno,
  texto,
  imageCarouselMegapix,
  imageCarouselMega,
  imageCarouselMegaUno,
  imageCarouselAssiria,
  titleButton,
  imageAssiriaUno,
  imageAssiriaDos,
  imageCarouselFluence,
  imageFluenceUno,
  imageFluenceDos,
  onButtonClick,
}) => {
  return (
    <div className="contenedorCard">
      <div className="contenedorCarouselUno">
        <div className="contenedorImgCarouselUno">
          {imageAssiriaUno && (
            <img src={imageAssiriaUno} 
              alt="Imagen Assiria 1" 
              className="fichaUno"
            />
          )}
          {imageCarouselAssiria && (
            <img
              src={imageCarouselAssiria}
              alt="Imagen Assiria"
              className="imgAssiria"
            />
          )}
          {imageAssiriaDos && (
            <img 
              src={imageAssiriaDos} 
              alt="Imagen Assiria 2" 
              className="fichaDos"
              />
          )}

          {imageCarouselMega && (
            <img 
              src={imageCarouselMega} 
              alt="Imagen Mega" 
              className="imgMega"
              />
          )}
          {imageCarouselMegapix && (
            <img
              src={imageCarouselMegapix}
              alt="Imagen Megapix"
              className="imgMegapix"
            />
          )}
          {imageCarouselMegaUno && (
            <img src={imageCarouselMegaUno} alt="Imagen Mega Uno" />
          )}

          {imageFluenceUno && (
            <img src={imageFluenceUno} alt="Imagen Fluence 1" />
          )}
          {imageCarouselFluence && (
            <img
              src={imageCarouselFluence}
              alt="Imagen Fluence"
              className="imgFluence"
            />
          )}
          {imageFluenceDos && (
            <img src={imageFluenceDos} alt="Imagen Fluence 2" />
          )}
        </div>

        <div className="contenedorTextosCarousel">
          <div>
            <p className="miniTituloCarousel">{miniTitulo}</p>
            <h2 className="tituloCarousel">{titulo}</h2>
            <p className="subtituloCarouselDos">{textoUno}</p>
            <p className="subtituloCarousel">{texto}</p>
          </div>
          <div className="contenedorBtnCarouselBtn">
            
            <ButtonFirst titleButton={titleButton} onClick={onButtonClick} />
          </div>
        </div>
      </div>
      <div className="contenedorRocaCarousel">
        <img
          src={Roca}
          className="rocaGira"
          alt="Imagen de una roca flotando"
        />
      </div>
    </div>
  );
};

CardCarousel.propTypes = {
  miniTitulo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  textoUno: PropTypes.string,
  texto: PropTypes.string,
  imageCarouselMegapix: PropTypes.string,
  imageCarouselMega: PropTypes.string,
  imageCarouselMegaUno: PropTypes.string,

  imageCarouselAssiria: PropTypes.string,
  imageAssiriaUno: PropTypes.string,
  imageAssiriaDos: PropTypes.string,

  imageCarouselFluence: PropTypes.string,
  imageFluenceUno: PropTypes.string,
  imageFluenceDos: PropTypes.string,

  titleButton: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardCarousel;
