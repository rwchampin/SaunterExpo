import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../constants/Colors';

function NewsIcon({ active }) {
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
      className="prefix__feather prefix__feather-file-text"
    >
      <Path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <Path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </Svg>
  );
}

export default NewsIcon;
