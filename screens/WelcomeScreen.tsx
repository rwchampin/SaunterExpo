import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated';
import { Button } from '../components/FormElements';
import { Text, View } from '../components/Themed';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function WelcomeScreen() {
  const welcomeScreens = [
    {
      id: 1,
      copy: 'Channel your most impulsive self. Explore your city and meet new people “missed connections” style.',
      img: require('../assets/images/welcome-1.png'),
      color: '#E1CF27',
      style: {
        alignSelf: 'center',
        aspectRatio: 1,
        alignSelf: 'flex-start',
        height: 280,
        width: 217
      }
    },
    {
      id: 2,
      copy: 'Find someone interesting you want to connect with? Drop them a note and see if they find you back.',
      img: require('../assets/images/welcome-2.png'),
      color: '#E7C0FF',
      style: {
        alignSelf: 'center',
        aspectRatio: 1,
        top: 406,
        alignSelf: 'flex-end',
        height: 189,
        width: 149
      }
    },
    {
      id: 3,
      copy: 'Be present and move freely, the action is around you, not just on your phone.',
      img: require('../assets/images/welcome-3.png'),
      color: '#4EBBC2',
      style: {
        alignSelf: 'center',
        aspectRatio: 1,
        alignSelf: 'flex-start',
        width: 311,
        height: 93
      }
    }
  ];
  const sharedValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    sharedValue.value = event.contentOffset.x;
  });

  const renderItem = (index, item, sharedValue) => {
    const rStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        sharedValue.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0, 1, 0]
      );
      return {
        transform: [{ scale }]
      };
    });
    const rTextStyle = useAnimatedStyle(() => {
      const translateX = interpolate(
        sharedValue.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [width, 0, -width]
      );
      return {
        transform: [{ translateX }]
      };
    });
    return (
      <View
        key={item.id}
        style={[
          {
            flex: 1,
            width,
            height,
            padding: 20,
            backgroundColor: item.color
          }
        ]}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Animated.View style={rTextStyle}>
            <Text style={{ ...styles.text }}>{item.copy}</Text>
          </Animated.View>

          <Animated.Image
            style={[{ backgroundColor: 'red' }, item.style, rStyle]}
            source={item.img}
          />
        </View>
        <View>
          <Button title="Create an Account" />
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate={0}
        snapToInterval={width} //your element width
        // snapToAlignment={'center'}
        // snapToOffsets={[1, 2, 3]}
        horizontal
        style={styles.scrollView}
      >
        {welcomeScreens.map((item, index) => renderItem(index, item, sharedValue))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    width,
    height
  },
  text: {
    fontSize: 26,
    lineHeight: 31,
    color: 'black'
  }
});
