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
  interpolateColor,
  Easing,
  withSpring,
  interpolate,
  withTiming
} from 'react-native-reanimated';
import { Button, Shadow } from 'native-base';
import Paginator from '../../components/Paginator';
import { Text, View } from '../../components/Themed';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function WelcomeScreen(props) {
  const welcomeScreens = [
    {
      id: 1,
      copy: 'Channel your most impulsive self. Explore your city and meet new people “missed connections” style.',
      img: require('../../assets/images/welcome-1.png'),
      color: '#E1CF27',
      style: {
        alignSelf: 'center',
        alignSelf: 'flex-end',
        height: 280,
        width: 217
      }
    },
    {
      id: 2,
      copy: 'Find someone interesting you want to connect with? Drop them a note and see if they find you back.',
      img: require('../../assets/images/welcome-2.png'),
      color: '#E7C0FF',
      style: {
        alignSelf: 'center',
        aspectRatio: 1,
        alignSelf: 'flex-start',
        height: 189,
        width: 149,
        transform: [{ rotate: '90deg' }]
      }
    },
    {
      id: 3,
      copy: 'Be present and move freely, the action is around you, not just on your phone.',
      img: require('../../assets/images/welcome-3.png'),
      color: '#4EBBC2',
      style: {
        alignSelf: 'center',
        aspectRatio: 1,
        alignSelf: 'flex-end',
        width: 217,
        height: 280
        // transform: [{ rotate: '90deg' }]
      }
    }
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sharedValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    sharedValue.value = event.contentOffset.x;
    // console.log('etf', event.contentOffset.x);
  });

  const renderItem = (index, item, sharedValue) => {
    const rStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        sharedValue.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0, 1, 0]
      );
      const rotate = interpolate(
        sharedValue.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        ['0deg', '-90deg', '0deg']
      );
      return {
        opacity: scale,
        transform: [{ scale }]
      };
    });
    const rTextStyle = useAnimatedStyle(() => {
      const translateX = interpolate(
        sharedValue.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [width, 0, -width]
      );
      const opacityVal = interpolate(
        sharedValue.value,
        [(index - 1) * width - 100, index * width - 100, (index + 1) * width - 100],
        [0, 1, 0]
      );
      return {
        opacity: opacityVal,
        transform: [{ translateX: withTiming(translateX, { delay: 200, easing: Easing.linear }) }]
      };
    });
    const colorStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        sharedValue.value,
        welcomeScreens.map((_, i) => width * i),
        welcomeScreens.map((product) => product.color)
      ) as string;
      return { flex: 1, backgroundColor };
    });

    return (
      <Animated.View
        key={item.id}
        style={[
          {
            flex: 1,
            width,
            padding: 20,
            paddingTop: 100
          },
          colorStyle
        ]}
      >
        <View
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            paddingBottom: 180
          }}
        >
          <Animated.View style={rTextStyle}>
            <Text style={{ ...styles.text }}>{item.copy}</Text>
          </Animated.View>

          <Animated.Image style={[item.style, rStyle]} source={item.img} />
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        onScroll={scrollHandler}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        snapToInterval={width} //your element width
        snapToAlignment={'center'}
        // snapToOffsets={[1, 2, 3]}
        onScrollEndDrag={({ nativeEvent }) => {
          setActiveIndex(nativeEvent.targetContentOffset.x / width);
        }}
        horizontal
        style={styles.scrollView}
      >
        {welcomeScreens.map((item, index) => renderItem(index, item, sharedValue))}
      </Animated.ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: 'transparent',
          position: 'absolute',

          width,
          bottom: 20,
          left: 0
        }}
      >
        <Paginator screens={welcomeScreens} activeIndex={activeIndex} />
        {activeIndex === welcomeScreens.length - 1 && (
          <Button
            size="lg"
            variant="outline"
            style={{ borderColor: 'black' }}
            _text="Continue"
            onPress={() => {
              props.navigation.push('SignUpScreen');
            }}
          >
            <Text>Continue</Text>
          </Button>
        )}

        <Button
          onPress={() => props.navigation.navigate('SignInScreen')}
          size="sm"
          variant="outline"
          _text={{ color: 'black', marginTop: 2 }}
          onPress={() => console.log('hello world')}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: StatusBar.currentHeight
  },
  scrollView: {
    width,
    height,
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 26,
    lineHeight: 31,
    color: 'black'
  }
});
