import "./styles.css";
import Gracias from '../../images/gracias.png';
import PropTypes from "prop-types";




const WorksFin = ({ imagen }) => {
  return (
    <div className="contenedorFin">
      <div className="bannerCultura">
        <div className="contieneImgComentario">
          <img className="imagenComentarios" src={imagen} />
        </div>

        <div className="textosCultura">
          <h3 className="textoTitulo">Si llegaste hasta acá</h3>
          <h3 className="textoComentarios">
          Te queremos agradecer
          </h3>
          <p className="textoTitulo">★★★★★</p>
          <div className="contenedorTextComentarios">
            <p className="textoComentarios">
            Para nosotros es fundamental saber que despertamos en vos un poco de interés. Sabemos que somos una empresa joven, pero lo que realmente nos define es la pasión y el compromiso de cada persona que forma parte de Polynomium. Creemos en nuestro potencial colectivo y en el poder de crecer juntos como una gran familia unida, todos tirando para el mismo lado creando productos únicos en el mercado.
            </p>
            <div className="lineaComentarios"></div>
            <p className="textoComentarios">
            Con mucha ambición y confianza, trabajamos día a día para convertirnos en los mejores en lo que hacemos, ¡sin miedo a soñar en grande y alcanzar el éxito! 🚀
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={Gracias} />
      </div>
    </div>
  );
};



WorksFin.propTypes = {
  imagen: PropTypes.string,
};

export default WorksFin;
