import { StyleSheet, View, Text } from "react-native";

function Home() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 18
  }
});

export default Home;