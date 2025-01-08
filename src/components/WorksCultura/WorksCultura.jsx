import "./styles.css";
import PropTypes from "prop-types";

const WorksCultura = ({
  imagen,
  galeriaUno,
  galeriaDos,
  galeriaTres,
  galeriaCuatro,
  galeriaCinco,
  galeriaSeis,
}) => {
  return (
    <div className="contenedorCultura" id="Nosotros">
      <div>
        <h2 className="tituloBuenLugar">
          Un poco sobre <span className="azulLugar">nuestra cultura</span>
        </h2>
      </div>

      <div className="bannerCultura">
        <div className="textosCultura">
          <p className="bannerBuenLugarTexto">
            ¿Cómo esta compuesto hoy el equipo?
          </p>
          <p className="bannerBuenLugarTextoAzul">
            Ya somos más de 35 personas en diferentes provincias y países.
          </p>
        </div>

        <div className="contieneImgCultura">
          <img src={imagen} />
        </div>
      </div>

      <div className="galeriaCultura">
        <div className="contieneGaleria">
          <img src={galeriaUno} />
        </div>
        <div className="contieneGaleria">
          <img src={galeriaDos} />
        </div>
        <div className="contieneGaleria">
          <img src={galeriaTres} />
        </div>
        <div className="contieneGaleria">
          <img src={galeriaCuatro} />
        </div>
        <div className="contieneGaleria">
          <img src={galeriaCinco} />
        </div>
        <div className="contieneGaleria">
          <img src={galeriaSeis} />
        </div>
      </div>
    </div>
  );
};

WorksCultura.propTypes = {
  imagen: PropTypes.string,
  galeriaUno: PropTypes.string,
  galeriaDos: PropTypes.string,
  galeriaTres: PropTypes.string,
  galeriaCuatro: PropTypes.string,
  galeriaCinco: PropTypes.string,
  galeriaSeis: PropTypes.string,
};

export default WorksCultura;
