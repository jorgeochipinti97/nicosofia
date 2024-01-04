'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cube';

import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation } from "swiper/modules";
import { SliderFlipPage } from "../SliderFlipCard";


export const SliderFlip = () => {
  
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        pagination={true}

        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
          <SliderFlipPage button={"Innova"} video={"https://res.cloudinary.com/dcw5qpoqq/video/upload/v1703792123/secuencia2_sdlasi.mp4"} />
        </SwiperSlide>
        <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
          <SliderFlipPage button={"Innova"} video={"https://res.cloudinary.com/dcw5qpoqq/video/upload/v1703792139/Vertical_1_xlusq3.mp4"} />
        </SwiperSlide>

      </Swiper>
    </>
  );
};
