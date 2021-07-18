/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator(); // for the modal - doesnt need that linking shit
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator<RootStackParamList>();

function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Root" component={BottomTabNavigator} />
      <MainStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </MainStack.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="AuthModal" component={AuthStackNavigator} />
    </RootStack.Navigator>
  );
}

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
};
