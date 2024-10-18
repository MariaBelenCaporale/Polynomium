import { useRef, useState } from 'react';
import "./styles.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import CardCarousel from "../CardCarousel/CardCarousel";
import Moneda from '../../images/coin.png';
import Ruleta from '../../images/ruleta.png';
import Diamante from '../../images/pixdiamante.png';
import FichaUno from '../../images/fichaUno.png';
import FichaDos from '../../images/fichaDos.png';
import Fluence from '../../images/fluence.png';
import Popup from '../Popup/Popup';

import "swiper/swiper-bundle.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";


const Carousel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const swiperRef = useRef(null);
  const [lightColor, setLightColor] = useState('blue'); 

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => { 
    switch(swiper.realIndex) { 
      case 0:
        setLightColor('rgb(0 117 255 / 24%)'); // Megapix
        break;
      case 1:
        setLightColor('rgb(126 46 245 / 19%)' ); // Assiria
        break;
      case 2:
        setLightColor('rgb(215 254 98 / 22%)' ); // Fluence
        break;
      default:
        setLightColor('rgb(0 117 255 / 24%)'); 
    }
  };

  const openPopup = (url) => {
    setVideoUrl(url);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setVideoUrl('');
  };

  return (
    <section className="sectionCarousel" id="productos">
      <div className="contenedorCarouselTotal">
        <div className="fraseFondo">
          <h2 className="fraseFondoTexto">Nuestros productos</h2>
        </div>

        <div className="containerLuzUno" >
          <div style={{ backgroundColor: lightColor }} className="luzUno"></div>
          <div style={{ backgroundColor: lightColor }} className="luzUnoA"></div>
        </div>

        <div className='containerBtnCarousel'>
          <button className='btnCarousel' onClick={handlePrev}>
            <KeyboardArrowLeftRoundedIcon />
          </button>
        </div>
        
        <Swiper
          ref={swiperRef}
          modules={[Pagination, EffectCoverflow]}
          pagination={{ clickable: true }}
          loop={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={600}
          onSlideChange={handleSlideChange} 
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 900,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <CardCarousel 
              titleButton='Ver más'
              // onButtonClick={() => openPopup('https://player.vimeo.com/video/1019520949?share=copy')}
              miniTitulo="Proyectos"
              titulo="Megapix"
              textoUno="Revolucionando los Pagos con PIX"
              texto={
                "Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras."
              }
              imageCarouselMegapix={Moneda}
              imageCarouselMega={Diamante}
              imageCarouselMegaUno={null}

            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCarousel
              titleButton='Ver más'
              onButtonClick={() => openPopup('https://player.vimeo.com/video/1019520949?share=copy')}
              
              miniTitulo="Proyectos"
              titulo="Assiria"
              textoUno="Plataformas Igaming"
              texto={
                "Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora."
              }
              imageAssiriaUno={FichaDos}
              imageCarouselAssiria={Ruleta}
              imageAssiriaDos={FichaUno}
              
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCarousel  
              titleButton='Ver más'
              onButtonClick={() => openPopup('https://player.vimeo.com/video/1019525364?share=copy')}

              miniTitulo='Proyectos'
              titulo='Fluence'
              textoUno={'Sigue al conejo'}
              texto={'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.'}
              imageCarouselFluence={Fluence}
              imageFluenceDos={null}
              imageCarouselDos={null}
            />
          </SwiperSlide>
        </Swiper>

        <div className='containerBtnCarousel'>
          <button className='btnCarousel' onClick={handleNext}>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
      </div>
      {isPopupOpen && <Popup videoUrl={videoUrl} onClose={closePopup} />}
    </section>
  );
};

export default Carousel;
