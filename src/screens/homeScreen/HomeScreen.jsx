import About from '../../components/About/About';
import CardForm from '../../components/CardForm/CardForm';
import Carousel from '../../components/Carousel/Carousel';
import Hero from '../../components/Hero/Hero';
import Necesidad from '../../components/Necesidad/Necesidad';
import Soluciones from '../../components/Soluciones/Soluciones';
import Bola from '../../images/rock.gif';
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
            <Carousel />
            <CardForm />
        </section>
    )
};

export default HomeScreen;