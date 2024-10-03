import  { useRef } from 'react';
import "./styles.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import CardCarousel from "../CardCarousel/CardCarousel";
import Moneda from '../../images/coin.png';
import Ruleta from '../../images/ruleta.png';
import Fluence from '../../images/fluence.png';

import "swiper/swiper-bundle.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

const Carousel = () => {
  const swiperRef = useRef(null);

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

  return (
    <section className="sectionCarousel">
      <div className="contenedorCarouselTotal">
        <div className="fraseFondo">
          <h2 className="fraseFondoTexto">Nuestros productos</h2>
        </div>

        <div className="containerLuzUno">
          <div className="luzUno"></div>
          <div className="luzUnoA"></div>
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
              miniTitulo="Proyectos"
              titulo="Megapix"
              textoUno="Revolucionando los Pagos con PIX"
              texto={
                "Forjamos un ambiente donde los comerciantes prosperan y los turistas disfrutan de pagos sin complicaciones, derribando barreras y construyendo conexiones sin fronteras."
              }
              imageCarousel={Moneda}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCarousel
              miniTitulo="Proyectos"
              titulo="Assiria"
              textoUno="Plataformas Igaming"
              texto={
                "Creamos universos virtuales donde el igaming no es solo entretenimiento, sino una experiencia inmersiva y transformadora."
              }
              imageCarousel={Ruleta}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCarousel 
              miniTitulo='Proyectos'
              titulo='Fluence'
              textoUno={'Sigue al conejo'}
              texto={'Ser parte de Fluverse implica más que unirse a una plataforma: es adentrarse en un universo de educación financiera.'}
              imageCarousel={Fluence}
            />
          </SwiperSlide>
        </Swiper>

        <div className='containerBtnCarousel'>
        <button className='btnCarousel' onClick={handleNext}>
          <KeyboardArrowRightRoundedIcon />
        </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
