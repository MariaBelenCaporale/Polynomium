import PropTypes from "prop-types";
import "./styles.css";
import Roca from "../../images/roca.png";
import Moneda from "../../images/coin.png";

const CardCarousel = ({ miniTitulo, titulo, textoUno, texto }) => {
  return (
    <div className="contenedorCard">
      <div className="contenedorCarouselUno">
        <div className="contenedorImgCarouselUno">
          <img src={Moneda} alt="Imagen de una moneda de Megapix" />
        </div>
        <div className="contenedorTextosCarousel">
          <p className="miniTituloCarousel">{miniTitulo}</p>
          <h2 className="tituloCarousel">{titulo}</h2>
          <p className="subtituloCarouselDos">{textoUno}</p>
          <p className="subtituloCarousel">{texto}</p>
        </div>
      </div>
      <div className="contenedorRocaCarousel">
        <img src={Roca} alt="Imagen de una roca flotando" />
      </div>
    </div>
  );
};

CardCarousel.propTypes = {
  miniTitulo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  textoUno: PropTypes.string,
  texto: PropTypes.string
};

export default CardCarousel;
