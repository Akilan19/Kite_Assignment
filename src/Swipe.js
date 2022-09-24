import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper";

export default function Swipe() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="one common"></SwiperSlide>
        <SwiperSlide className="two common"></SwiperSlide>
        <SwiperSlide className="three common"></SwiperSlide>
        <SwiperSlide className="four common"></SwiperSlide>
      </Swiper>
    </>
  );
}
