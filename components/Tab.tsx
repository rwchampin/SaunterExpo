import React, { ReactElement, cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { eq, multiply } from 'react-native-reanimated';
import { withTransition } from 'react-native-redash/lib/module/v1';

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: Animated.Node<number>;
  index: number;
}

const Tab = ({ children, active, index, onPress }: TabProps) => {
  const isActive = eq(active, index);
  const activeTransition = withTransition(isActive);
  const width = multiply(activeTransition, 30);
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <View style={{ height: 30, width: 30 }}>
        <View style={StyleSheet.absoluteFill}>{children}</View>
        <Animated.View style={{ overflow: 'hidden', width }}>
          {cloneElement(children, { active: true })}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Tab;
