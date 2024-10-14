import './styles.css';
import PropTypes from 'prop-types';

const ButtonFirst = ({ titleButton, onClick }) => {
    return (
     
        <button className='buttonStyle' onClick={onClick}>
           {titleButton}
        </button>
    
    )
};

ButtonFirst.propTypes = {
    titleButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ButtonFirst;