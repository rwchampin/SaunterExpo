import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import Animated, { neq, and, cond, multiply, block, add } from 'react-native-reanimated';
import { interpolate } from 'react-native-redash/lib/module/v1';

const HEIGHT = 60;
const width = Dimensions.get('window').width;
const size = 6;
const topParticles = [0, 1, 2];
const bottomParticles = [0, 1];

interface ParticlesProps {
  transition: Animated.Node<number>;
  activeTransition: Animated.Node<number>;
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center'
  },
  particles: { height: HEIGHT },
  particle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: 'purple'
  }
});
const ParticleDots = ({ transition, activeTransition }: ParticlesProps) => {
  const middle = HEIGHT / 2 - size / 2;
  const opacity = 1; //and(neq(activeTransition, 0), neq(activeTransition, 1));
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.particles}>
        {topParticles.map((particle) => {
          const translateX = add(multiply(transition, width / 4), width / 4 / 2 - size / 2);
          const translateY = interpolate(activeTransition, {
            inputRange: [0, 0.5, 1],
            outputRange: [middle, 0, middle]
          });
          const scale = interpolate(activeTransition, {
            inputRange: [0, 0.5, 1],
            outputRange: [0.8, 1, 0.8]
          });
          return (
            <Animated.View
              key={particle}
              style={[
                styles.particle,
                {
                  opacity,
                  transform: [{ translateX, translateY }]
                }
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};
export default ParticleDots;
