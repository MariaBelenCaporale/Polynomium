import './styles.css';
import RocaUno from '../../images/roca.png'
import Energia from '../Energia/Energia';
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const { t } = useTranslation();

    return (
        <section className='sectionHero'>
            <div className='contenedorRocaUno'>
                <img src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='contenedorRocaDos'>
                <img className='rocaUnoHero' src={RocaUno} alt='imagen de roca flotante' />
            </div>
            <div className='containerTextosHero'>
                <h2 className='tituloHeroAzul'>{t('Innovación sin límites,')}</h2>
                <h2 className='tituloHero'>{t('no esperamos el futuro;')}</h2>
                <h2 className='tituloHero'>{t("lo estamos creando hoy.")}</h2>
                <p className='subtituloHero'>{t("ADN tecnológico en constante evolución")}</p>
            </div>

            <Energia />
        </section>
    )
};

export default Hero;