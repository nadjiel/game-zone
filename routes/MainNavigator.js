import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigator from "./HomeNavigator";
import AboutNavigator from "./AboutNavigator";

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={ {
        headerShown: false
      } }
    >
      <Drawer.Screen
        name="Home Page"
        component={ HomeNavigator }
      />
      <Drawer.Screen
        name="About Game Zone"
        component={ AboutNavigator }
      />
    </Drawer.Navigator>
  );
}

export default MainNavigator;