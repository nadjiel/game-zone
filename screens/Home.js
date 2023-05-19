import { View, Text } from "react-native";

import { globalStyles } from "../styles/global";

function Home() {
  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.title }>Home</Text>
    </View>
  )
}

export default Home;