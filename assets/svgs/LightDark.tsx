import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type LightDarkProps = {
  color?: string; // stroke color
  backgroundColor?: string; // background color
  size?: number; // optional size
};

const LightDark: React.FC<LightDarkProps> = ({
  color = '#000', // default stroke color
  backgroundColor = 'transparent', // default background
  size = 24, // default size
  ...props
}) => {
  return (
    <View
      style={{
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...props}
      >
        <Path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
        <Path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z" />
        <Path d="M12 5V3M12 21v-2" />
        <Path d="M5 12H2M22 12h-3" />
        <Path d="M16.95 7.05L19.07 4.93" />
        <Path d="M4.929 19.071L7.05 16.95" />
        <Path d="M16.95 16.95l2.121 2.121" />
        <Path d="M4.929 4.929L7.05 7.05" />
      </Svg>
    </View>
  );
};

export default LightDark;
