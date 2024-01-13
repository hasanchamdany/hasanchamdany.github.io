import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedLogo = (logo, width, height, alt) => {
  return (
    <>
      <motion.div
        data-aos="fade-up"
        whileHover={{ scale: 1.2 }}
        className="mx-4 my-2 relative overflow-hidden"
      >
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
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
    </>
  );
};

export default AnimatedLogo;
