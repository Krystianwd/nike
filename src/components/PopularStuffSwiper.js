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
const PopularStuffSwiper = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={"3"}
        navigation={true}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        hashNavigation={{
          watchState: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe2.jpg"></img>
            <p>NIKE AIR FORCE LUXE 1</p>
            <br />
            <p>Buty męskie</p> <br />
            <p>669,99zł</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe4.png"></img>
            <p>NIKE AIR FORCE LUXE 1</p>
            <br />
            <p>Buty męskie</p> <br />
            <p>669,99zł</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe5.png"></img>
            <p>NIKE DUNK LOW</p>
            <br />
            <p>Buty damskie</p> <br />
            <p>579,99zł</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe6.png"></img>
            <p>MĘSKIE NIKE AIR MAX PULSE</p>
            <br />
            <p>Buty męskie</p> <br />
            <p>759,99 zł</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe7.jpg"></img>
            <p>NIKE AIR MAX 1</p>
            <br />
            <p>Buty męskie</p> <br />
            <p>729,99 zł</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularStuffCaption">
            <img src="nikeShoe8.png"></img>
            <p>NIKE AIR MAX PULSE</p>
            <br />
            <p>Buty męskie</p> <br />
            <p>549,94 zł</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default PopularStuffSwiper;
