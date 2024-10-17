
import About from '../../components/About/About';
import CardForm from '../../components/CardForm/CardForm';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Necesidad from '../../components/Necesidad/Necesidad';
import Slogan from '../../components/Slogan/Slogan';
import Soluciones from '../../components/Soluciones/Soluciones';
import './styles.css';
import Roca from '../../images/roca.png';
import NavBar from '../../components/Navbar/NavBar';
import Energia from '../../components/Energia/Energia';

const HomeScreen = () => {


    return (
        <section className='contenedorHome'>
            <div className='contieneRocaHome'>
                <img src={Roca} alt='roca flotante' />
            </div>
            <NavBar />
            <Hero />
            <span className="luzAzulDos"></span>
            <span className="luzAzul"></span>
            <Energia />
            <About />
            <Necesidad />
            <Soluciones />
            <Carousel />
            <CardForm />
            <Slogan />
            <Footer />
        </section>
    );
};

export default HomeScreen;
