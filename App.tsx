import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppDrawerScreen from './navigation/DrawerNavigation';
import AnimatedSplash from 'react-native-animated-splash-screen';
import AnimatedLogo from './components/AnimatedLogo';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <NativeBaseProvider style={{ backgroundColor: 'red' }}>
      <AnimatedSplash isLoaded={isLoadingComplete} customComponent={<AnimatedLogo />}>
        <SafeAreaProvider>
          <AppDrawerScreen colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </AnimatedSplash>
    </NativeBaseProvider>
  );
}
