// components/TiltComponent.js
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;
    VanillaTilt.init(tiltElement, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
    });

    // return () => {
    //   VanillaTilt.destroy(tiltElement);
    // };
  }, []);

  return <div ref={tiltRef}>{children}</div>;
};

export default TiltComponent;
