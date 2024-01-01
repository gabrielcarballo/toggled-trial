import React from 'react';
import Svg, { Defs, ClipPath, Polygon, RadialGradient, Stop, Circle } from 'react-native-svg';
import Animated from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Trapezium() {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Defs>
        <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor="#ff0" stopOpacity="1" />
          <Stop offset="100%" stopColor="#f00" stopOpacity="1" />
        </RadialGradient>
        <ClipPath id="clip">
          <Polygon points="10,10 90,10 70,90 30,90" />
        </ClipPath>
      </Defs>
      <AnimatedCircle cx="50" cy="50" r="50" fill="url(#grad)" clipPath="url(#clip)" />
    </Svg>
  );
}