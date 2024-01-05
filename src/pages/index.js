import React, { useState, useEffect } from "react";
import Link from "next/link";
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
import Carousel from "./../components/Carousel/Carousel.jsx";



import vector1 from "./../../public/images/vector-1.svg";
import dummy from "./../../public/images/dummy.png";
import HumanVector from "./../../public/images/human-vector.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <section className=" h-screen w-full ">
        <div className="bg-dark-base  w-full h-screen">
          {/* <h1>test woe</h1> */}
          <div className="md:flex flex-row justify-between mx-36 items-center h-screen block">
            
            <div className=" text-white font-bold block">
              <div
                className="md:mt-40 mt-10 md:text-6xl text-3xl"
                data-aos="fade-right"
              >
                <h1 data-aos="fade-right">HASAN</h1>
                <h1 data-aos="fade-right">CHAMDANY</h1>
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
                style={{ fontSize: "1.5em" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <div className="md:w-[500px] w-[300px] max-h-[10px] bg-gradient-to-r from-[#E86319] to-[#FFE603] rounded-xl mt-2 text-transparent">
                {" "}
                p
              </div>
              <div className="flex w-full h-fit mt-2 justify-start">
                <Link href="https://www.instagram.com/hasan.chamdany/">
                  <AiFillInstagram className="w-[40px] h-[40px] mx-1" />
                </Link>
                <Link href="https://github.com/hasanchamdany">
                  <AiFillGithub className="w-[40px] h-[40px] mx-1" />
                </Link>
                <Link href="https://wa.me/6281330666660">
                  <AiOutlineWhatsApp className="w-[40px] h-[40px] mx-1" />
                </Link>
                <Link href="https://www.linkedin.com/in/muchammad-hasan-chamdany-090a1a196/">
                  <AiFillLinkedin className="w-[40px] h-[40px] mx-1" />
                </Link>
                <Link href="mailto:hasanchamdany@gmail.com">
                  <AiFillMail className="w-[40px] h-[40px] mx-1" />
                </Link>
              </div>
            </div>
            <div
              data-aos="fade"
              className=" max-w-[583.67px]"
            >
              <Image
                src={vector1}
                alt="vector frontend"
                width={583.67}
                height={585.35}
                layout={"responsive"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:block hidden h-screen w-full">
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
          {/* <ProjectCard/> */}
        </div>
      </section>
    </>
  );
}
