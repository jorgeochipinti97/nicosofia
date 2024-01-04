'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { useRouter } from "next/navigation";
import { SliderCard } from "../SliderCard";


export const SliderCards = () => {
  const router = useRouter();
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className="mySwiper my-10 md:my-0"
    >
      <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
        <SliderCard video={"https://res.cloudinary.com/dcw5qpoqq/video/upload/v1703792102/Kimetsu_s78mq5.mp4"} button="Transforma" />
      </SwiperSlide>
      <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
        <SliderCard video={"https://res.cloudinary.com/dcw5qpoqq/video/upload/v1703792104/Influencer_ayuvtf.mp4"} button="Hablemos" />
      </SwiperSlide>
  
    </Swiper>
  );
};
