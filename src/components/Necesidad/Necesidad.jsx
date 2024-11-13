import './styles.css';
import Cuadrado from '../../images/necesidad.gif';
import CardLoader from '../CardLoader/CardLoader';

const Necesidad = () => {
  return (
    <section className='sectionNecesidad'>
      <div className='contenedorNecesidadTotal'>
        <CardLoader />
        <div className='contenedorImgCuadrado'>
          <img className='imgCuadrado' src={Cuadrado} alt='cuadrado' />
        </div>
      </div>
    </section>
  );
};

export default Necesidad;
