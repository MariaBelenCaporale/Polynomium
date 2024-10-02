import './styles.css';
import Cuadrado from '../../images/necesidad.png';

const Necesidad = () => {
    return (
        <section className='sectionNecesidad'>
            <div className='contenedorNecesidadTotal'>
                <div className='contenedorTituloNec'>
                    <h2 className='tituloNecesidad'>¿Qué desarrollo necesitas?</h2>
                </div>
           
            <div className='contenedorImgCuadrado'>
                <img className='imgCuadrado' src={Cuadrado} alt='cuadrado' />
            </div>
            </div>
        </section>
    )
};

export default Necesidad; 