"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface Props {
  children: React.ReactNode;
}
export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      infinite
      keyBoardControl
      pauseOnHover
      responsive={responsive}
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
      itemClass="m-2"
    >
      {children}
    </Carousel>
  );
}
