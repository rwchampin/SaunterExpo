import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppDrawerScreen from './navigation/DrawerNavigation';

import AnimatedLogo from './components/AnimatedLogo';

export default function App() {
  async function runLoadCache() {
    const wtf = await useCachedResources();
    console.log(wtf);
    return true;
  }
  const isLoadingComplete = runLoadCache();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <NativeBaseProvider>
        <AnimatedLogo />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider forceInset={{ bottom: 100 }}>
          <AppDrawerScreen colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
