import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { mainPhotoshoots } from "../data/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SwiperStyles.css";

// import required modules

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const PhotoSwiper = () => {
  const [caption, setCaption] = useState("Steetwear");
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={"2"}
        loop={true}
        modules={[EffectCoverflow]}
        className="mainPhotoshootSwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
        }}
      >
        {Object.entries(mainPhotoshoots).map(([key, array]) =>
          array.map((value) => (
            <SwiperSlide>
              <img
                id="mainPhotoshoot"
                src={value}
                width="1024px"
                height="768px"
                onMouseOver={() => {
                  setCaption(key);
                }}
                onClick={() => {
                  console.log(key);
                }}
              ></img>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div id="PhotoSwiperCaption">{caption}</div>
    </>
  );
};
export default PhotoSwiper;
