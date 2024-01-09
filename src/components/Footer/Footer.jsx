import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 bg-dark-base text-white">
      <div className="flex flex-row justify-center gap-4">
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
      <div className="flex justify-center">
        <p className="pb-2">&copy; 2024 Hasan Chamdany. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
