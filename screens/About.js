import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../styles/global";

function About() {
  return (
    <View style={ globalStyles.container }>
      <Text style={ styles.paragraph }>
        Game Zone is a mini game review application made so you can
        read all about your favorite games critic rankings and scores.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    textAlign: "center"
  }
});

export default About;