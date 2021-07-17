import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, {
  withTiming,
  withSpring,
  withDelay,
  withSequence,
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import Letter from './Letter';
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  letter: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: 55,
    transform: [{ translateY: 5000 }]
  }
});

const letters = [
  require(`../assets/images/logo/svg/s.svg`),
  require(`../assets/images/logo/svg/a.svg`),
  require(`../assets/images/logo/svg/u.svg`),
  require(`../assets/images/logo/svg/n.svg`),
  require(`../assets/images/logo/svg/t.svg`),
  require(`../assets/images/logo/svg/e.svg`),
  require(`../assets/images/logo/svg/r.svg`)
];

const AnimatedLogo = (props) => {
  const sharedValues = letters.map((_, index) => useSharedValue(-200));

  const animatedStyles = letters.map((_, index) =>
    useAnimatedStyle(() => {
      return {
        // opacity: sharedValues[index].value,
        transform: [{ translateY: sharedValues[index].value }]
      };
    })
  );

  useEffect(() => {
    letters.map((_, index) => {
      sharedValues[index].value = withDelay(150 * index, withSpring(0));
    });
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      {letters.map((img, i) => {
        return (
          <Animated.View
            style={[
              { backgroundColor: 'red', display: 'flex', flex: 1, overflow: 'hidden' },
              animatedStyles[i]
            ]}
            key={i}
          >
            <Image style={style.letter} source={img} />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default AnimatedLogo;
