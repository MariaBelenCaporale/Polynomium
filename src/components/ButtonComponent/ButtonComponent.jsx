
import PropTypes from 'prop-types';
import './styles.css';

const ButtonComponent = ({ titulo }) => {
    return (
        <div>
            <button className='btnForm'>{titulo}</button>
        </div>
    );
};

ButtonComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default ButtonComponent;
