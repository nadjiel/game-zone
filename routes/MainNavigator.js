import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={ {
        headerTintColor: "#444",
        headerStyle: {
          backgroundColor: "#eee"
        }
      } }
    >
      <Stack.Screen
        name="Home"
        component={ Home }
        options={ {
          title: "Game Zone"
        } }
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ ReviewDetails }
        options={ {
          title: "Review Details"
        } }
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;