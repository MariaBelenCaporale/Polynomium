import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import Necesidad from '../../components/Necesidad/Necesidad';
import Soluciones from '../../components/Soluciones/Soluciones';
import Bola from '../../images/bola.png';
import './styles.css';


const HomeScreen = () => {
    return (
        <section className='contenedorHome'>

            <Hero />
            <div className='contieneBola'>
            <img className='imgBola' src={Bola} alt='bola de energía' />
            </div>
            <About />
            <Necesidad />
            <Soluciones />
        </section>
    )
};

export default HomeScreen;