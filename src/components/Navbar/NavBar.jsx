import LanguageSelect from '../Language/Language';
import './styles.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='navbar'>
      <div className="containerLogo">
        <a className="linkLogoNav" href="#top">
          <img className="logo" src={''} alt="Logo Megapix" />
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
    </nav>
    )
};


export default NavBar;


