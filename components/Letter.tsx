import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Animated, {
  AnimateLayout,
  SlideInRight,
  Transitioning,
  Transition
} from 'react-native-reanimated';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  letter: {
    flex: 1,
    resizeMode: 'contain'
  }
});

const Letter = (props) => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <Animated.View style={props.style}>
      <Image source={props.source} />
    </Animated.View>
  );
};

export default Letter;
