import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TextSpan = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      // transition: {
      //   times: [0, -4, -6, -7, -8, -9]
      // },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      whileHover={{
        textShadow: "0px 0px 8px #FFE603", // Adjust the shadow values as needed
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="hover:text-[#FFE603]"
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
