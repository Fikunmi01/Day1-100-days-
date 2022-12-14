import React from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image from "../image/Imgs.png";
// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Sliders() {
  const sliderInfo = [
    {
      id: 0,
      heading: "Social media shared today, tomorrow or by location.",
      imgSrc: image,
    },
    {
      id: 1,
      heading: "Social media a problem, or a solution for everyone.",
      imgSrc: image,
    },
    {
      id: 2,
      heading:
        "Social media it's advantages, disadvantages? ",
      imgSrc: image,
    },
  ];
  return (
    <>
      <div className="slider-div">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderInfo.map((data) => (
            <SwiperSlide key={data.id}>
              <p>{data.heading}</p>
              <img src={data.imgSrc} alt="" />
              <img className="ellipse" src="./Ellipse.png" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
