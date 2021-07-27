import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { height, width } from '../constants/layout;';
import AnimatedLogo from '../components/AnimatedLogo';
import { Text, View } from '../components/Themed';

export default function IntroScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/images/city1.png')} style={styles.container}>
      <AnimatedLogo navigation={navigation} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
