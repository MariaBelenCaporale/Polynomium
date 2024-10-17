import './styles.css';
import RocaUno from '../../images/roca.png'

const Hero = () => {
    return (
        <section className='sectionHero'>
            <div className='contenedorRocaUno'>
                <img src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='contenedorRocaDos'>
                <img src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='containerTextosHero'>
                <h1 className='tituloHero'>No esperamos el futuro; lo estamos creando hoy.</h1>
                <p className='subtituloHero'>POLYNOMIUM, CREADORES DE SOLUCIONES TECNOLÓGICAS</p>
            </div>
        </section>
    )
};

export default Hero;