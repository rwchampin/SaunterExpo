/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import NotesScreen from '../screens/Authenticated/NotesScreen';
import MessagesScreen from '../screens/Authenticated/MessagesScreen';
import NotificationsScreen from '../screens/Authenticated/NotificationsScreen';
import NewsScreen from '../screens/Authenticated/NewsScreen';
import useColorScheme from '../hooks/useColorScheme';
import IntroScreen from '../screens/IntroScreen';
import TabBar from '../components/TabBar';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Notes"
      tabBarOptions={{
        activeTintColor: Colors.dark.pink,
        inactiveBackgroundColor: Colors.dark.background,
        activeBackgroundColor: Colors.dark.background
      }}
      labelStyle={{ backgroundColor: Colors.dark.background }}
      tabBar={(props) => <TabBar />}
    >
      <BottomTab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              style={{ backgroundColor: Colors.dark.background }}
              name="ios-heart-outline"
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="ios-notifications-outline"
              style={{ backgroundColor: Colors.dark.background }}
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              style={{ backgroundColor: Colors.dark.background }}
              name="chatbox-outline"
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              style={{ backgroundColor: Colors.dark.background }}
              name="reader-outline"
              color={color}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
