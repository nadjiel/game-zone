import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import Header from "../components/Header";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
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
        options={ ({ navigation }) => ({
          headerTitle: () => (
            <Header
              navigation={ navigation }
              title="Game Zone"
            />
          )
        }) }
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

export default HomeNavigator;