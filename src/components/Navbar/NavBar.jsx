import LanguageSelect from '../Language/Language';
import Logo from '../../images/logo.png';
import './styles.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
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
          <Link to="/" className='link'>Nosotros</Link>
        </li>
        <li>
          <Link to="/about" className='link'>Productos</Link>
        </li>
        <li>
          <Link to="/contact" className='link'>Contacto</Link>
        </li>
      </ul>
      <LanguageSelect />
      </div>
    </nav>
    )
};


export default NavBar;


