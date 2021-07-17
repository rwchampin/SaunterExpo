import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function TabTwoScreen() {
  const welcomeScreens = [
    { id: 1, copy: 'hhdhhdhdhdh', img: require('../assets/images/welcome-1.png'), color: 'yellow' },
    { id: 2, copy: 'hhdhhdhdhdh', img: require('../assets/images/welcome-1.png'), color: 'blue' },
    { id: 3, copy: 'hhdhhdhdhdh', img: require('../assets/images/welcome-1.png'), color: 'green' }
  ];
  const renderItem = (item) => {
    return (
      <View
        key={item.id}
        style={{
          flex: 1,
          width,
          height,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue'
        }}
      >
        <Text style={{ ...styles.text, color: 'pink', backgroundColor: 'orange', width: '100%' }}>
          text
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      horizontal={true}
      decelerationRate={0}
      snapToInterval={width - 60} //your element width
      snapToAlignment={'center'}
      style={styles.container}
    >
      <ScrollView snapToOffsets={[1, 2, 3]} horizontal style={styles.scrollView}>
        {welcomeScreens.map((item) => renderItem(item))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    backgroundColor: 'pink',
    flex: 1,
    width,
    height
  },
  text: {
    fontSize: 42,
    color: 'black'
  }
});
