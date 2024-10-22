import './styles.css';
import PropTypes from 'prop-types';

const ButtonFirst = ({ titleButton, onClick, disabled }) => {
    return (
        <div className='firstContenedor'>
            <button 
                className='buttonStyle' 
                onClick={onClick} 
                disabled={disabled} 
            >
                {titleButton}
            </button>
        </div>
    );
};

ButtonFirst.propTypes = {
    titleButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool, 
};

ButtonFirst.defaultProps = {
    disabled: false,
};

export default ButtonFirst;
