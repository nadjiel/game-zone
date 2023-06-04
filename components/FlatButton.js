import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

function FlatButton({ text, behaviour }) {
  return (
    <TouchableOpacity onPress={ behaviour }>
      <View style={ styles.container }>
        <Text style={ styles.content }>{ text }</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71"
  },
  content: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
});

export default FlatButton;