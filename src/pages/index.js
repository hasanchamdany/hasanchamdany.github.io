import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./../components/Navbar/Navbar.jsx";
import ProjectCard from "./../components/Card/ProjectCard.jsx";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import vector1 from "./../../public/images/vector-1.svg";
import dummy from "./../../public/images/dummy.png"

const inter = Inter({ subsets: ["latin"] });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// const getDeviceType = () => {
//   const ua = navigator.userAgent;
//   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//     return "tablet";
//   }
//   if (
//     /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
//       ua
//     )
//   ) {
//     return "mobile";
//   }
//   return "desktop";
// };

export default function Home() {
  // let device
  // useEffect(
  //    device = getDeviceType()
  //   )
  return (
    <>
      <Navbar />
      <section className=" h-screen w-full">
        <div className="bg-landing-1 w-full h-[863.73px]">
          {/* <h1>test woe</h1> */}
          <div className="flex flex-row">
            <div className="mt-40 ml-32">
              <Image
                src={vector1}
                alt="vector frontend"
                width={583.67}
                height={585.35}
              />
            </div>
            <div className="mt-40 ml-[450px] text-white font-bold">
              <div className="mt-40 text-6xl">
                <h1>HASAN</h1>
                <h1>CHAMDANY</h1>
              </div>
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  "I am a Web Developer",
                  1000,
                  "I am a UI/UX Designer",
                  1000,
                  "I am a Mobile Developer",
                  1000,
                  "I am a Data Engineer",
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "2em" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <div className="w-[500px] max-h-[10px] bg-gradient-to-r from-[#E86319] to-[#FFE603] rounded-xl mt-2 text-transparent">
                {" "}
                p
              </div>
              <div className="flex w-full h-fit mt-2 justify-start">
                <button>
                  <AiFillInstagram className="w-[40px] h-[40px] mx-1" />
                </button>
                <button>
                  <AiFillGithub className="w-[40px] h-[40px] mx-1" />
                </button>
                <button>
                  <AiOutlineWhatsApp className="w-[40px] h-[40px] mx-1" />
                </button>
                <button>
                  <AiFillLinkedin className="w-[40px] h-[40px] mx-1" />
                </button>
                <button>
                  <AiFillMail className="w-[40px] h-[40px] mx-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-full">
        <div className="w-[1000px] h-[700px]">
          <div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={device !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={device}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
          >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <ProjectCard src={dummy} title="dummy test project" desc="project gabut untuk testing personal website"/>
          </Carousel>
          </div>
          {/* <ProjectCard/> */}
        </div>
      </section>
    </>
  );
}
