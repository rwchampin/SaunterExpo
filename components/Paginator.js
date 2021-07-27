import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  FormControl,
  Input,
  Stack,
  Text,
  Pressable,
  Center,
  Box,
  Flex,
  NativeBaseProvider,
  Button
} from 'native-base';

const Paginator = (props) => {
  const dots = props.screens.map((_, index) => {
    const dotStyle =
      props.activeIndex === index
        ? { backgroundColor: 'black', borderWidth: 1, borderColor: 'transparent' }
        : { bakgroundColor: 'rgba( 0,0,0,.4)', borderColor: 'black', borderWidth: 1 };
    return (
      <Box
        style={[
          { height: 10, width: 10, borderRadius: '200%', marginLeft: 3, marginRight: 3 },
          dotStyle
        ]}
      />
    );
  });

  return (
    <Box
      w={200}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}
    >
      {dots}
    </Box>
  );
};

export default Paginator;
