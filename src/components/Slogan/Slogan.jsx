
import './styles.css';
import Adn from '../../images/adn.png';

const Slogan = () => {
    return (
        <section className='sectionSlogan'>
            <div className='contenedorImgAdn'>
                <img src={Adn} alt='logo 3d' />
            </div>
            <div className='contenedorTextoSlogan'>
                <h2 className='sloganTexto'>Megapix, innovando el presente & futuro</h2>
            </div>
        </section>
    )
};

export default Slogan;