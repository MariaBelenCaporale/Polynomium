import About from '../../components/About/About';
import CardForm from '../../components/CardForm/CardForm';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Necesidad from '../../components/Necesidad/Necesidad';
import Slogan from '../../components/Slogan/Slogan';
import Soluciones from '../../components/Soluciones/Soluciones';
import Bola from '../../images/rock.gif';
import './styles.css';
import Roca from '../../images/roca.png';
import Rayomov from '../../images/rayomov.gif';
import NavBar from '../../components/Navbar/NavBar';


const HomeScreen = () => {
    return (
        <section className='contenedorHome'>
            <div className='contieneRocaHome'>
                <img src={Roca} alt='roca flotante' />
            </div>
            <NavBar />
            <Hero />
            <div className='contieneBola'>
            <img className='imgBola' src={Bola} alt='bola de energía' />
            <img className='rayo' src={Rayomov} alt='rayos' />
            <img className='rayoDos' src={Rayomov} alt='rayos' />
            <span className='luzAzul'></span>
            </div>
            <About />
            <Necesidad />
            <Soluciones />
            <Carousel />
            <CardForm />
            <Slogan />
            <Footer />
        </section>
    )
};

export default HomeScreen;