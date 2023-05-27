import { View, Text, Button } from "react-native";

import { globalStyles } from "../styles/global";

function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.title }>Home</Text>
      <Button
        title="Go to review details"
        onPress={ pressHandler }
      />
    </View>
  )
}

export default Home;