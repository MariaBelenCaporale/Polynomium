import './styles.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='navbar'>
      <h1 className='logo'>Mi Sitio</h1>
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
    </nav>
    )
};


export default NavBar;