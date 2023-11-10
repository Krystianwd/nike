import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SwiperStyles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const PhotoSwiper = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="nikePhotoshoot1.1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="nikePhotoshoot2.1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="nikePhotoshoot4.1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="nikePhotoshoot45.1.jpeg"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default PhotoSwiper;
