import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PopularStuffPhotoshoots } from "../data/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SwiperStyles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const PopularStuffSwiper = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
        }}
        centeredSlides={true}
        slidesPerView={"1"}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        className="mySwiper"
        id="popularStuffSwiper"
        allowTouchMove={false}
      >
        {PopularStuffPhotoshoots.map((arrayItem) => {
          return (
            <SwiperSlide>
              <div className="popularStuffCaption">
                <img src={arrayItem.path}></img>
                <p>{arrayItem.name}</p>
                <br />
                <p>{arrayItem.type}</p> <br />
                <p>{arrayItem.price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default PopularStuffSwiper;
