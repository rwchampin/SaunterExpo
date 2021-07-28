import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';


let customFonts = {
  ...Ionicons.font,
  'cooper': require('../assets/fonts/CooperBT-MediumItalic.ttf'),
  'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
};


export default const useCachedResources = () => {.
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [loaded, error] = useFonts(customFonts);

  React.useEffect(async () => {

      SplashScreen.preventAutoHideAsync();

      setLoadingComplete(true);
      SplashScreen.hideAsync();

  }, [loaded, error]);

  return isLoadingComplete;
}
