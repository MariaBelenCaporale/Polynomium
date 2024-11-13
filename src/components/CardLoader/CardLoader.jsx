import "./styles.css";

const CardLoader = () => {
  return (
    <div className="card">
      <div className="loader">
        <p>Nuestro ADN</p>
        <div className="words">
          <span className="word"></span>
          <span className="word">Tecnología</span>
          <span className="word">Innovación</span>
          <span className="word">Diseño</span>
          <span className="word">Desarrollo</span>
          <span className="word">Energía</span>
          <span className="word">Materia</span>
          <span className="word">Equipo</span>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
