/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { ColorSchemeName, Image, Text, Button, View } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignInScreen from '../screens/AuthFlow/SignInScreen';
import { Ionicons } from '@expo/vector-icons';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';
import IntroScreen from '../screens/IntroScreen';
import WelcomeScreen from '../screens/AuthFlow/WelcomeScreen';

import NotesScreen from '../screens/Authenticated/NotesScreen';
import NotificationsScreen from '../screens/Authenticated/NotificationsScreen';
export default function Navigation() {
  return <RootStackNavigator />;
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator(); // for the modal - doesnt need that linking shit
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Root">
      <MainStack.Screen
        name="Saunter"
        component={BottomTabNavigator}
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: Colors.dark.background },
            headerTintColor: Colors.dark.pink,
            headerTitleStyle: { color: 'white' },
            headerLeft: () => (
              <Ionicons
                size={30}
                style={{ color: 'white', marginBottom: -3, paddingLeft: 10 }}
                name="menu"
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <Ionicons
                name="person-outline"
                size={30}
                style={{ color: 'white', marginBottom: -3, paddingRight: 10 }}
              />
            )
          };
        }}
      />
      <MainStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </MainStack.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} style={{ backgroundColor: 'red' }}>
      <RootStack.Screen
        screenOptions={{ headerShown: false }}
        name="AuthModal"
        component={AuthStackNavigator}
      />
      <RootStack.Screen
        name="Main"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
const MyCustomHeaderBackImage = () => (
  <Image source={require('../assets/images/pink-chev.png')} style={{ width: 22, height: 22 }} />
);
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="IntroScreen">
      <AuthStack.Screen
        component={IntroScreen}
        name="IntroScreen"
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        component={WelcomeScreen}
        name="WelcomeScreen"
        options={{ headerShown: false }}
      />
      <AuthStack.Screen component={SignInScreen} name="SignInScreen" />
      <AuthStack.Screen
        component={SignUpScreen}
        name="SignUpScreen"
        options={({ navigation, route }) => {
          return {
            headerTitle: <Text style={{ color: 'white' }}>Create Accounts</Text>,
            headerStyle: { backgroundColor: 'transparent', color: 'white' },
            headerTransparent: true,
            headerBackTitleVisible: false,
            title: '',
            headerTintColor: '#fff',
            // headerStyle: {
            //   backgroundColor: 'red',
            //   shadowColor: 'transparent'
            // },
            headerBackImage: MyCustomHeaderBackImage
          };
        }}
      />
    </AuthStack.Navigator>
  );
};
