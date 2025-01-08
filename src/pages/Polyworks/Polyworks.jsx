import InfoGeneral from '../../components/Info general/InfoGeneral';
import BuenLugar from '../../components/WorksBuenLugar/BuenLugar';
import WorksBusquedas from '../../components/WorksBusquedas/WorksBusquedas';
import WorksButtons from '../../components/WorksButtons/WorksButtons';
import WorksCultura from '../../components/WorksCultura/WorksCultura';
import WorksComentarios from '../../components/WorksComentarios/WorksComentario';
import WorksImagen from '../../components/WorksImagen/WorksImagen';
import GaleriaUno from '../../images/galeriaUno.jpg';
import GaleriaDos from '../../images/galeriaDos.jpg';
import GaleriaTres from '../../images/galeriaTres.jpg';
import GaleriaCuatro from '../../images/galeriaCuatro.jpg';
import GaleriaCinco from '../../images/galeriaCinco.jpg';
import GaleriaSeis from '../../images/galeriaSeis.jpg';
import Comentario from '../../images/comentarios.png';
import './styles.css';
import WorksVideo from '../../components/WorksVideo/WorksVideo';
import WorkFaqs from '../../components/WorkFaqs/WorkFaqs';
import WorksFin from '../../components/WorksFin.jsx/WorksFin';



const Polyworks = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div className='contenedorWorks'>
             <h2 className='polyWork'>Polyworks</h2>
            <div className='ordenButtons'>
               
                <WorksButtons 
                    titulo='Info general'
                    onClick={() => scrollToSection('Info')}
                />
                <WorksButtons 
                    titulo='Polyworks disponibles'
                    onClick={() => scrollToSection('Busquedas')}
                />
                <WorksButtons 
                    titulo='Un poco de nosotros'
                    onClick={() => scrollToSection('Nosotros')}
                />
            </div>

                <WorksImagen />
                <InfoGeneral  />
                <BuenLugar />
                <WorksBusquedas />
                <WorksCultura 
                    galeriaUno={GaleriaUno}
                    galeriaDos={GaleriaDos}
                    galeriaTres={GaleriaTres}
                    galeriaCuatro={GaleriaCuatro}
                    galeriaCinco={GaleriaCinco}
                    galeriaSeis={GaleriaSeis}
                />
                <WorksComentarios 
                    imagen={Comentario}
                />
                <WorksVideo />
                <WorkFaqs />
                <WorksFin />
        </div>
    )
};





export default Polyworks;
