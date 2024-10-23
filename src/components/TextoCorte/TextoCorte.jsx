import './styles.css';
import { useTranslation } from 'react-i18next';

const TextoCorte = () => {
    const { t } = useTranslation();
    const text = t('Adn tecnológico.  Innovación sin limites. Adn tecnológico. Innovación sin limites. Adn tecnológico. Innovación sin limites. Adn tecnológico. Innovación sin limites. ');

    return (
        <div className='textMoveContainer'>
            <div className='textMoveWrapper'>
                <p className='textMove'>{text}</p>
                <span className='textMoveSpacer'></span>
                <p className='textMove'>{text}</p>
            </div>
        </div>
    );
}

export default TextoCorte;
