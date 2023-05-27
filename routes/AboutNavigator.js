import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";

import Header from "../components/Header";

const Stack = createNativeStackNavigator();

function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={ {
        headerTintColor: "#444",
        headerStyle: {
          backgroundColor: "#eee"
        }
      } }
    >
      <Stack.Screen
        name="About"
        component={ About }
        options={ ({ navigation }) => ({
          headerTitle: () => (
            <Header
              navigation={ navigation }
              title="About Game Zone"
            />
          )
        }) }
      />
    </Stack.Navigator>
  );
}

export default AboutNavigator;