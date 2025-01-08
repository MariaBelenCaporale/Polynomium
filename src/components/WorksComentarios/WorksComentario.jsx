import "./styles.css";
import PropTypes from "prop-types";


const WorksComentarios = ({ imagen }) => {
  return (
    <div className="contieneWorkComentario">
      <div className="bannerCultura">
        <div className="contieneImgComentario">
          <img className="imagenComentarios" src={imagen} />
        </div>

        <div className="textosCultura">
          <h3 className="textoTitulo">
            El espíritu de nuestra ofi-hogar
          </h3>
          <h3 className="textoComentarios">
            ¿Por qué es tan importante para nosotros?
          </h3>
          <p className="textoTitulo">
            ★★★★★
          </p>
          <div className="contenedorTextComentarios">
          <p className="textoComentarios">
          Desde el inicio, al crear nuestro espacio, tuvimos la oportunidad de elegir entre innumerables tipos de oficinas, en diversos barrios y lugares. Sin embargo, en Poly teníamos una visión clara: queríamos un lugar que fuera más que una simple oficina, un espacio con alma de casa. Así nació la idea de nuestro espacio de trabajo, diseñado para inspirar y conectar. Con patio, parrilla, múltiples mesas y rincones únicos, creamos un lugar donde cada persona increíble que decida unirse a este viaje pueda sentirse cómoda, libre y en casa.
          </p>
          <div className="lineaComentarios"></div>
          <p className="textoComentarios">
          Te invitamos a ser parte de esta aventura y a visitar nuestro espacio siempre que quieras. Aquí no solo creamos productos extraordinarios, también compartimos momentos irrepetibles, celebramos logros y alimentamos nuestra ambición de ser los mejores en todo lo que hacemos. ¡Bienvenid@ a Poly, un lugar para crecer y disfrutar juntos!
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};


WorksComentarios.propTypes = {
  imagen: PropTypes.string,
};

export default WorksComentarios;
