import React, { ReactElement, cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { eq, multiply, greaterThan, cond } from 'react-native-reanimated';
import { withTransition } from 'react-native-redash/lib/module/v1';

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: Animated.Node<number>;
  transition: Animated.Node<number>;
  index: number;
}

const Tab = ({ children, transition, active, index, onPress }: TabProps) => {
  const isActive = eq(active, index);
  const activeTransition = withTransition(isActive);
  const width = multiply(activeTransition, 50);
  const isGoingLeft = greaterThan(transition, active);
  const direction = cond(
    isActive,
    cond(isGoingLeft, 'rtl', 'ltr'),
    cond(isGoingLeft, 'ltr', 'rtl')
  );
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View style={{ height: 50, width: 50, direction }}>
        <View style={StyleSheet.absoluteFill}>{children}</View>
        <Animated.View style={{ overflow: 'hidden', width }}>
          {cloneElement(children, { active: true })}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default Tab;
