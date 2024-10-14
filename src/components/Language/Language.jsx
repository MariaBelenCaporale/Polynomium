import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useTranslation } from 'react-i18next';
import Brasil from '../../images/brasil.jpg';
import Argentina from '../../images/argentina.png';
import EstadosUnidos from '../../images/banderaEEUU.png'; 
import './styles.css';

const LanguageSelect = () => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const languageFlags = {
        'Portugués': Brasil,
        'Español': Argentina,
        'Inglés': EstadosUnidos, 
    };

    const handleLanguageChange = (language) => {
        let lng;
        switch (language) {
            case 'Portugués':
                lng = 'br';
                break;
            case 'Español':
                lng = 'es';
                break;
            case 'Inglés':
                lng = 'en'; 
                break;
            default:
                lng = 'es'; 
        }
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const selectedLanguage = (() => {
        switch (i18n.language) {
            case 'br':
                return 'Portugués';
            case 'es':
                return 'Español';
            case 'en':
                return 'Inglés'; 
            default:
                return 'Español'; 
        }
    })();

    const selectedFlag = languageFlags[selectedLanguage];

    return (
        <div className='containerLanguage'>
            <div className='selectedLanguage' onClick={toggleDropdown}>
                <KeyboardArrowDownRoundedIcon sx={{ color: 'white', marginLeft: '8px' }} />
                <img className='flag' src={selectedFlag} alt={selectedLanguage} />
                <p className='idioms'>{selectedLanguage}</p>
            </div>
            {isDropdownOpen && (
                <div className='dropdownMenu'>
                    <div className='containerFlag' onClick={() => handleLanguageChange('Portugués')}>
                        <img className='flag' src={Brasil} alt="Portugués" />
                        <p className='idioms'>Portugués</p>
                    </div>
                    <div className='containerFlag' onClick={() => handleLanguageChange('Español')}>
                        <img className='flag' src={Argentina} alt="Español" />
                        <p className='idioms'>Español</p>
                    </div>
                    <div className='containerFlag' onClick={() => handleLanguageChange('Inglés')}>
                        <img className='flag' src={EstadosUnidos} alt="Inglés" />
                        <p className='idioms'>Inglés</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSelect;
