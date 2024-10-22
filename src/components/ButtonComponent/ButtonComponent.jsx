import PropTypes from 'prop-types';
import './styles.css';

const ButtonComponent = ({ titulo, isSelected, onClick }) => (
    <div className='btnContenedorForm'>
        <button 
            className={`buttonComponent btnForm ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            {titulo}
        </button>
    </div>
);

ButtonComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
    isSelected: false,
};

export default ButtonComponent;
