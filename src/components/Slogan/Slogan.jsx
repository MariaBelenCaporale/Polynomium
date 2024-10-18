import Roca from '../../images/rocaDos.png';
import './styles.css';
import Adn from '../../images/adn.png';

const Slogan = () => {
    return (
        <section className='sectionSlogan'>
            <div className='contenedorRocaSlogan'>
                <img src={Roca} alt='rica flotando' />
            </div>
            <div className='contenedorImgAdn'>
                <img src={Adn} alt='logo 3d' />
            </div>
            <div className='contenedorTextoSlogan'>
                <h2 className='sloganTexto'> <span className='polyAzul'>Polynomium,</span> innovando el presente & futuro</h2>
            </div>
        </section>
    )
};

export default Slogan;