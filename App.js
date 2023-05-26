import { StatusBar } from 'expo-status-bar';
import { StyleSheet/* , View */ } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ Home } />
          <Stack.Screen name="ReviewDetails" component={ ReviewDetails } />
        </Stack.Navigator>

        <StatusBar style="auto" />
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({});