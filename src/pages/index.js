import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./../components/Navbar/Navbar.jsx";
import { TypeAnimation } from "react-type-animation";
import { AiFillInstagram, AiFillGithub, AiFillMail, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";

import vector1 from "./../../public/images/vector-1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <section className=" h-full w-full">
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
              <div className="w-[500px] max-h-[10px] bg-gradient-to-r from-[#E86319] to-[#FFE603] rounded-xl mt-2 text-transparent"> p</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
