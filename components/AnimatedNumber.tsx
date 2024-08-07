"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <animated.div>
      {number.to(n => n.toFixed(0))}
    </animated.div>
  );
};

export default AnimatedNumber;
