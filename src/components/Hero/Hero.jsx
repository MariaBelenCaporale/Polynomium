import './styles.css';
import RocaUno from '../../images/roca.png'

const Hero = () => {
    return (
        <section className='sectionHero'>
            <div className='contenedorRocaUno'>
                <img src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='contenedorRocaDos'>
                <img className='rocaUnoHero' src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='containerTextosHero'>
                <h2 className='tituloHeroAzul'>Innovación sin límites,</h2>
                <h2 className='tituloHero'> no esperamos el futuro;</h2>
                <h2 className='tituloHero'> lo estamos creando hoy.</h2>
                <p className='subtituloHero'>ADN tecnológico en constante evolución</p>
            </div>
        </section>
    )
};

export default Hero;