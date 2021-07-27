import * as React from 'react';
import {
  ColorSchemeName,
  Image,
  Text,
  Button,
  View,
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import NotesScreen from '../screens/Authenticated/NotesScreen';
import NotificationsScreen from '../screens/Authenticated/NotificationsScreen';
import Navigation from '../navigation';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Navigation" component={Navigation} />
    </AppDrawer.Navigator>
  </NavigationContainer>
);

export default AppDrawerScreen;
