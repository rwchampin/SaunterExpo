import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold'
  }
});

const Button = (props) => {
  return (
    <TouchableOpacity style={{ width: '100%' }}>
      <Text style={styles.btn}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
