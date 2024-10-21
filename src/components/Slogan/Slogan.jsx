import Roca from '../../images/rocaDos.png';
import './styles.css';
import Adn from '../../images/adn.png';
import { useTranslation } from 'react-i18next';

const Slogan = () => {
    const { t } = useTranslation();

    return (
        <section className='sectionSlogan'>
            <div className='slogan'>
            <div className='contenedorRocaSlogan'>
                <img src={Roca} alt='rica flotando' />
            </div>
            <div className='contenedorImgAdn'>
                <img src={Adn} alt='logo 3d' />
            </div>
            <div className='contenedorTextoSlogan'>
                <h2 className='sloganTexto'> <span className='polyAzul'>{t("Polynomium,")}</span>{t(" innovando el presente & futuro")}</h2>
            </div>
            </div>
        </section>
    )
};

export default Slogan;