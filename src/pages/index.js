import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./../components/Navbar/Navbar.jsx";

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
            <div className="">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
