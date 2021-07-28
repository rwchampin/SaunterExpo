import * as React from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { View, Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import BellIcon from './BellIcon';
import HeartIcon from './HeartIcon';
import MessageIcon from './MessageIcon';
import NewsIcon from './NewsIcon';
import { Value, useCode, onChange, block, set } from 'react-native-reanimated';
import Tab from './Tab';
import Colors from '../constants/Colors';
import { withTransition, timing } from 'react-native-redash/lib/module/v1';
import ParticleDots from './ParticleDots';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const tabs = [
  { icon: <HeartIcon /> },
  { icon: <BellIcon /> },
  { icon: <MessageIcon /> },
  { icon: <NewsIcon /> }
];

const SEGMENT = width / tabs.length;
const PADDING = 10;
const ICON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    // height: 100,
    // alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: Colors.dark.background
  },
  tabs: { flexDirection: 'row', alignItems: 'center' },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING + 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabBar = () => {
  /* eslint-disable */
  /* prettier-ignore */
  const active = new Value<number>(0);
  const transition = withTransition(active);
  const activeTransition = new Value(0);
  useCode(
    () => block([onChange(active, set(activeTransition, 0))], [set(activeTransition, timing({}))]),
    []
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        <ParticleDots {...{ transition, activeTransition }} />
        {tabs.map(({ icon }, index) => (
          <View style={styles.tab} key={index}>
            <Tab onPress={() => active.setValue(index)} {...{ active, index, transition }}>
              {icon}
            </Tab>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
