import './styles.css';
import PropTypes from 'prop-types';



const WorksButtons = ({ titulo, onClick }) => {
    return (
        <button className='buttonWorks' onClick={onClick}>
            {titulo}
        </button>
    )
};


WorksButtons.propTypes = {
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default WorksButtons;