import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigator from "./HomeNavigator";
import AboutNavigator from "./AboutNavigator";

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="HomeNavigator"
        component={ HomeNavigator }
      />
      <Drawer.Screen
        name="AboutNavigator"
        component={ AboutNavigator }
      />
    </Drawer.Navigator>
  );
}

export default MainNavigator;