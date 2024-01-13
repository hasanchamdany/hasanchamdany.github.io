import React from "react";
import Image from "next/image";

const RoleCard = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center rounded-[30px] role-card  focus:scale-105 focus:outline-none shadow-lg shadow-black hover:shadow-[#DCC535] transition-shadow">
      <div className="lg:p-14 p-6" data-aos="fade-up">
        <Image src={image} width={200} />
      </div>
      <div className="flex justify-center text-center pt-4 pb-8" data-aos="fade-up">
        <h3 className="font-bold text-white lg:text-2xl text-xl">{text}</h3>
      </div>
    </div>
  );
};

export default RoleCard;
