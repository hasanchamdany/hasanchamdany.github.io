import React from "react";
import Image from "next/image";

const RoleCard = ({image, text}) => {
  return (
    <div className="rounded-[30px] role-card">
      <div className="p-8">
        <Image src={image} width={270} />
      </div>
      <div className="flex justify-center pt-4 pb-8">
        <h3 className="font-bold text-white text-2xl">{text}</h3>
      </div>
    </div>
  );
};

export default RoleCard;