import LanguageSelect from '../Language/Language';
import Logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next';
import './styles.css';



const NavBar = () => {
  const { t } = useTranslation();

    return (
        <nav className='navbar'>
          <div className='contenedorNav'>
      <div className="containerLogo">
        <a className="linkLogoNav" href="#top">
          <img className="logo" src={Logo} alt="Logo Megapix" />
        </a>
      </div>
      <ul className='navLinks'>
        <li>
          <a href="#nosotros" className='link'>{t("Nosotros")}</a>
        </li>
        <li>
          <a href="#productos" className='link'>{t("Productos")}</a>
        </li>
        <li>
          <a href="#contacto" className='link'>{t("Contacto")}</a>
        </li>
      </ul>
      <LanguageSelect />
      </div>
    </nav>
    )
};


export default NavBar;


