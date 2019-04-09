import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component3() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: '2000' });
  return <animated.div style={props}><h1>I will fade in</h1></animated.div>
}
