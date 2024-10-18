import LanguageSelect from '../Language/Language';
import Logo from '../../images/logo.png';
import './styles.css';



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
          <a href="#nosotros" className='link'>Nosotros</a>
        </li>
        <li>
          <a href="#productos" className='link'>Productos</a>
        </li>
        <li>
          <a href="#contacto" className='link'>Contacto</a>
        </li>
      </ul>
      <LanguageSelect />
      </div>
    </nav>
    )
};


export default NavBar;


