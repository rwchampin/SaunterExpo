import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../constants/Colors';

function MessageIcon({ active }) {
  return (
    <Svg
      width={50}
      height={50}
      fill={active ? Colors.dark.tint : 'none'}
      stroke={active ? Colors.dark.tint : 'white'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-message-square"
    >
      <Path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </Svg>
  );
}

export default MessageIcon;
