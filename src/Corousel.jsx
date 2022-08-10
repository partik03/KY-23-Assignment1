import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { EffectCube, Pagination,A11y,Scrollbar,Autoplay, Navigation} from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        scrollbar={{draggable:true}}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{clickable:true}}
        modules={[EffectCube, Pagination,A11y,Scrollbar,Autoplay,Navigation]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide id="l">
          <img src="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg" />
          <div className="txt">Inner peace is all you need.</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_1280.jpg" />
          <div className="txt">Whatever you believe with feeling becomes your reality…</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_1280.jpg" />
          <div className="txt">Nothing teaches us better than our own experiences..</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_1280.jpg" />
          <div className="txt">The most dangerous person is the one who listens, thinks and observes</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2018/01/09/20/24/wood-3072434_1280.jpg" />
          <div className="txt">Silence isn’t empty it’s full of answers..</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877__340.jpg" />
          <div className="txt">The secret to a rich life is to have more beginnings than endings.</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2019/02/19/08/43/milky-way-4006343__480.jpg" />
          <div className="txt">Try to learn something about everything and everything about something…</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/11/23/17/13/dark-1853877__480.jpg" />
          <div className="txt">If you’re good at something never do it for free..</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
