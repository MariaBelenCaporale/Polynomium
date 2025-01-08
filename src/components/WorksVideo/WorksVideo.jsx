import Oficina from  '../../images/videoOficina.mp4';
import './styles.css';



const WorksVideo = () => {
    return (
        <div className='contenedorVideoWork'>
            <div className='contieneVideo'>
                <video className='videoWork' src={Oficina} autoPlay controls/>
            </div>
        </div>
    )
};


export default WorksVideo;