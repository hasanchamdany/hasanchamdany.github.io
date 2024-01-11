import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./../components/Navbar/Navbar.jsx";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout.jsx";
import TextSpan from "@/components/TextAnimaation/TextSpan.js";
import ProjectCard from "./../components/Card/ProjectCard.jsx";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Carousel from "./../components/Carousel/Carousel.jsx";

import photo from "./../../public/images/photo.svg";
import iot from "./../../public/images/iot.png";
import webDev from "./../../public/images/web-dev.png";
import video from "./../../public/images/videographer.png";
import uiux from "./../../public/images/ui-ux.png";
import dummy from "./../../public/images/dummy.png";
import HumanVector from "./../../public/images/human-vector.png";
import RoleCard from "@/components/Card/RoleCard.jsx";

import logo1 from "./../../public/images/skillset/1.svg";
import logo2 from "./../../public/images/skillset/2.svg";
import logo3 from "./../../public/images/skillset/3.svg";
import logo4 from "./../../public/images/skillset/4.svg";
import logo5 from "./../../public/images/skillset/5.svg";
import logo6 from "./../../public/images/skillset/6.svg";
import logo7 from "./../../public/images/skillset/7.svg";
import logo8 from "./../../public/images/skillset/8.svg";
import logo9 from "./../../public/images/skillset/9.svg";
import logo10 from "./../../public/images/skillset/10.svg";
import logo11 from "./../../public/images/skillset/11.svg";
import logo12 from "./../../public/images/skillset/12.svg";
import logo13 from "./../../public/images/skillset/13.svg";
import logo14 from "./../../public/images/skillset/14.svg";
import logo15 from "./../../public/images/skillset/15.svg";
import logo16 from "./../../public/images/skillset/16.svg";
import logo17 from "./../../public/images/skillset/17.svg";
import logo18 from "./../../public/images/skillset/18.svg";
import logo19 from "./../../public/images/skillset/19.svg";
import logo20 from "./../../public/images/skillset/20.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const animationText = "Hasan Chamdany".split("");
  return (
    <>
      <DefaultLayout>
        {/* <Navbar /> */}
        <div className="w-full">
          <div className=" h-screen w-full ">
            <div className="bg-dark-base  w-full h-screen">
              {/* <h1>test woe</h1> */}
              <div className="md:flex flex-row justify-between mx-36 items-center h-screen block">
                <div className="   flex flex-col gap-2 font-bold ">
                  <div
                    className=" bg-gradient-to-r from-[#B822FF] to-[#0D8BFF] text-transparent bg-clip-text"
                    data-aos="fade-up"
                  >
                    <h2 className="text-5xl">Hello there!, I am</h2>
                  </div>
                  <div
                    className=" md:text-7xl text-3xl justify-start "
                    data-aos="fade-up"
                  >
                    <h1
                      className="text-white "
                      style={{
                        color:
                          "linear-gradient(99deg, #B822FF 3.09%, #0D8BFF 100%)",
                      }}
                    >
                      {animationText.map((text, index) => {
                        return (
                          <TextSpan key={index}>
                            {text === " " ? "\u00A0" : text}
                          </TextSpan>
                        );
                      })}
                    </h1>
                  </div>
                  <div
                    className="text-white text-2xl flex items-center gap-6"
                    data-aos="fade-up"
                  >
                    <div className="w-[22px] h-[75px] bg-gradient-to-b from-[#E86319] to-[#FFE603] rounded-xl mt-2 text-transparent">
                      {" "}
                      p
                    </div>
                    <TypeAnimation
                      // Same String at the start will only be typed once, initially
                      sequence={[
                        "Web Developer",
                        1000,
                        "UI/UX Designer",
                        1000,
                        "IoT Developer",
                        1000,
                        "Videographer",
                        1000,
                      ]}
                      speed={50} // Custom Speed from 1-99 - Default Speed: 40
                      style={{ fontSize: "1.5em" }}
                      wrapper="span" // Animation will be rendered as a <span>
                      repeat={Infinity} // Repeat this Animation Sequence infinitely
                      className="text-white"
                    />
                  </div>
                  <div
                    className="max-w-[595px] text-white text-md my-2"
                    data-aos="fade-up"
                  >
                    <p>
                      A final year student at Gadjah Mada University Majoring in
                      Information Technology. I am passioned with Software
                      Engineer particularly in the dynamic realm of Web
                      Development. With a rich background, I have contributed my
                      skills and creativity to various freelance web development
                      projects over the past two years and gained valuable
                      experience through internships at reputable companies
                    </p>
                  </div>
                  <div className="flex w-full h-fit mt-2 justify-start items-center text-white">
                    <button
                      className="rounded-[15px] bg-dark-grey text-white px-8 py-4"
                      data-aos="fade-up"
                    >
                      <p className="text-lg">Download my CV</p>
                    </button>
                    <Link
                      href="https://www.instagram.com/hasan.chamdany/"
                      data-aos="fade-up"
                    >
                      <AiFillInstagram className="w-[40px] h-[40px] mx-1" />
                    </Link>
                    <Link
                      href="https://github.com/hasanchamdany"
                      data-aos="fade-up"
                    >
                      <AiFillGithub className="w-[40px] h-[40px] mx-1" />
                    </Link>
                    <Link href="https://wa.me/6281330666660" data-aos="fade-up">
                      <AiOutlineWhatsApp className="w-[40px] h-[40px] mx-1" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/muchammad-hasan-chamdany-090a1a196/"
                      data-aos="fade-up"
                    >
                      <AiFillLinkedin className="w-[40px] h-[40px] mx-1" />
                    </Link>
                    <Link
                      href="mailto:hasanchamdany@gmail.com"
                      data-aos="fade-up"
                    >
                      <AiFillMail className="w-[40px] h-[40px] mx-1" />
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex justify-center items-center"
                  style={{
                    width: "523px",
                    height: "514px",
                    borderRadius: "267px",
                    background:
                      "linear-gradient(226deg, #EB8B32 0%, #DCC535 100%)",
                    boxShadow: "0px 0px 26.2px 12px #E0B835",
                  }}
                >
                  <Image
                    src={photo}
                    alt="vector frontend"
                    width={465}
                    height={465}
                    className="circularImage"
                    style={{
                      borderRadius: "228px",
                      boxShadow: "0px 0px 30px 12px #E2AE34 inset",
                    }}
                    // layout={"responsive"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-screen bg-dark-base">
            <div className="flex justify-between mx-20 pt-8">
              {/* Card */}
              <div className="flex flex-row gap-12">
                <div className="flex flex-col gap-8">
                  <RoleCard image={webDev} text="Web Development" />
                  <RoleCard image={iot} text="IoT Developer" />
                </div>
                <div className="flex flex-col gap-8 mt-20">
                  <RoleCard image={uiux} text="UIUX Designer" />
                  <RoleCard image={video} text="Videographer" />
                </div>
              </div>
              {/* Techstack */}
              <div>
                <div>
                  <h3 className="text-white text-5xl font-bold">
                    My Skills Set
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end max-w-[645px] pt-10">
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo1}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo2}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo3}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo4}
                      alt="Your Logo Alt Text"
                      width={111}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo5}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo6}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo7}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo8}
                      alt="Your Logo Alt Text"
                      width={131}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo9}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo10}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo11}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo12}
                      alt="Your Logo Alt Text"
                      width={171}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo13}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo14}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo15}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo16}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo17}
                      alt="Your Logo Alt Text"
                      width={293}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo18}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo19}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                  <motion.div
                    data-aos="fade-up"
                    whileHover={{ scale: 1.2 }}
                    className="mx-4 my-2 relative overflow-hidden"
                  >
                    <Image
                      src={logo20}
                      alt="Your Logo Alt Text"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="transition-transform transform"
                    />
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
                      }}
                      className="absolute top-0 left-0 right-0 bottom-0"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="sm:block hidden h-screen w-full">
        <div className="bg-dark-base w-full h-[1080px]">
          <div className="flex">
            <div className="pt-36 pl-8 ">
              <Image
                src={HumanVector}
                alt="programmer vector"
                width={346}
                height={876}
              />
            </div>
            <div className="w-[1400px]  pt-[390px] pl-20">
              <h1 className="text-5xl font-bold text-white">Recent Project</h1>
              <Carousel />
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </DefaultLayout>
    </>
  );
}
