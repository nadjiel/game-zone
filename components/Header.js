import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation, title }) {
  const pressHandler = () => {
    navigation.openDrawer();
  }

  return (
    <View style={ styles.container }>
      <MaterialIcons
        style={ styles.icon }
        name="menu"
        size={ 28 }
        onPress={ pressHandler }
      />
      <Text style={ styles.title }>{ title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    position: "absolute",
    left: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  }
});

export default Header;