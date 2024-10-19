import './styles.css';
import PropTypes from 'prop-types';

const ButtonFirst = ({ titleButton, onClick }) => {
    return (
        <div className='firstContenedor'>
        <button className='buttonStyle' onClick={onClick}>
           {titleButton}
        </button>
        </div>
    
    )
};

ButtonFirst.propTypes = {
    titleButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ButtonFirst;