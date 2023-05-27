import { StatusBar } from 'expo-status-bar';
import { StyleSheet/* , View */ } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from './routes/MainNavigator';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [ fontsLoaded ]);

  if(!fontsLoaded) {
    return null
  };

  return (
    // <View onLayout={ onLayoutRootView }>
      <NavigationContainer>
        <MainNavigator />

        <StatusBar style="auto" />
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({});