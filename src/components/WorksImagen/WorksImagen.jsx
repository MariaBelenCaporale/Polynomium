import WorksButtons from '../WorksButtons/WorksButtons';
import './styles.css';
import PropTypes from 'prop-types';

const WorksImagen = ({ imagen }) => {
    return (
        <div className='contenedorWorksImagen'>
            <div className='imagen'>
                <img src={imagen} />
            </div>
            <div className='tituloContieneWork'>
                <h2 className='workTitulo'><span className='azulWork'>Trabajá y crecé </span>en Polynomium</h2>
            </div>
            <div className='contenedorButtonWorksImg'>
                <WorksButtons 
                    titulo='Conectá con nosotros'
                    onClick={''}
                />
                <WorksButtons 
                    titulo='Polyworks disponibles'
                    onClick={''}
                />
            </div>
        </div>
    )
};

WorksImagen.propTypes = {
    imagen: PropTypes.string,
};



export default WorksImagen;