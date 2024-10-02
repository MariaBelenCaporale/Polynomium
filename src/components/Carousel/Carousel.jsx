import './styles.css';
import Roca from '../../images/roca.png';
import Moneda from '../../images/coin.png';

const Carousel = () => {
    return (
        <section className='sectionCarousel'>
            <div className='contenedorCarouselTotal'>
                <div className='contenedorCarouselUno'>
                <div>
            <button className='btnCarousel'></button>
            </div>
                <div className='contenedorImgCarouselUno'>
                    <img src={Moneda} alt='Imagen de una moneda de Megapix' />
                </div>
                <div className='contenedorTextosCarousel'>
                    <p className='miniTituloCarousel'>Proyetos</p>
                    <h2 className='tituloCarousel'>MEGAPIX</h2>
                    <p className='subtituloCarouselDos'>Revolucionando los Pagos con PIX.</p>
                    <p className='subtituloCarousel'>Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras.</p>
                </div>
                <div>
            <button className='btnCarousel'></button>
            </div>
                </div>
                <div className='contenedorRocaCarousel'>
                    <img src={Roca} alt='Imagen de una roca flotando' />
                </div>
            </div>
        </section>
    )
};

export default Carousel;