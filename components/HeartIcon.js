import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../constants/Colors';

function HeartIcon({ active }) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill={active ? Colors.dark.pink : 'none'}
      stroke={active ? Colors.dark.pink : 'white'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-heart"
    >
      <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </Svg>
  );
}

export default HeartIcon;
