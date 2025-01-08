import './styles.css';
import PropTypes from 'prop-types';

const InfoGeneral = ({ imagen }) => {
    return (
            <div className='contenedorInfoGeneral' id='Info'>
                <div className='textoCompletoGeneral'>
                    <h2 className='tituloInfoGeneral'>¿Que significa ser un Polyworker?</h2>
                    <p className='textoGeneral'>Un polyworker es una persona que le gusta trabajar en múltiples proyectos, roles o actividades profesionales de manera que aprender, crear y compartir son actividades del día a día. En Poly, valoramos que cada voz sea escuchada y cada integrante tenga un lugar firme para contribuir a la creación de productos excepcionales y métodos de trabajo innovadores. Nuestro objetivo es fomentar un entorno de confianza que permita el crecimiento personal y profesional en todos los aspectos.</p>
                    <p className='textoGeneral'>Creemos que las personas curiosas, con ganas de compartir sus conocimientos, son la clave para construir un horizonte diferente y sólido. Por eso, nos enfocamos en brindar herramientas y oportunidades que impulsen a cada individuo a alcanzar su mejor versión y a contribuir con ideas que transformen nuestra forma de trabajar y de impactar en el mundo.</p>
                </div>
                <div className='contieneImgGeneral'>
                    <img src={imagen} />
                </div>
            </div>
    )
};

InfoGeneral.propTypes = {
    imagen: PropTypes.string,
};


export default InfoGeneral;