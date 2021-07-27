import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../constants/Colors';

const BellIcon = ({ active }) => {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill={active ? Colors.dark.tint : 'none'}
      stroke={active ? Colors.dark.tint : 'white'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </Svg>
  );
};

export default BellIcon;
