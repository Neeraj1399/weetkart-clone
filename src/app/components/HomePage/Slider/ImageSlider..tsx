"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "https://weetkart.com/wp-content/uploads/Winter-fashion-8.avif",
  "https://weetkart.com/wp-content/uploads/Winter-fashion-5.avif",
  "https://weetkart.com/wp-content/uploads/Winter-fashion-7.avif",
];

export default function ImageSlider() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
