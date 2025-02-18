"use client";

import React from "react";
import { PostProps } from "@/lib/post";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PostsCarousel({ posts }: { posts: PostProps[] }) {
  console.log(posts.length);
  return (
    <div className="relative mb-12">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        dotListClass="absolute translate-y-8"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        className="m-auto w-[80svw] relative"
      >
        {posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="flex flex-col items-center rounded-md border w-fit m-auto space-y-2"
          >
            <Image
              src={`/images/${post.path}.png`}
              alt={`image of ${post.title}`}
              width={300}
              height={120}
              className="rounded-t-md"
            />
            <p className="font-semibold">{post.title}</p>
            <p>{post.description}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
