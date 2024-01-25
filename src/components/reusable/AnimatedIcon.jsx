// AnimatedIcon.js

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedIcon = ({ data }) => {
  const props = useSpring({
    loop: true,
    to: async (next) => {
      while (true) {
        await next({ transform: 'rotate(360deg)' });
      }
    },
  });

  return (
    <animated.div style={props}>
      {/* Replace 'data' with the actual data structure of your animated icon */}
      <img src={data} alt="Animated Icon" style={{ width: '4.285714rem', height: '4.285714rem' }} />
    </animated.div>
  );
};

export default AnimatedIcon;