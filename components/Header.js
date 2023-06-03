import { ImageBackground, View, Image, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation, title }) {
  const pressHandler = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground style={ styles.container } source={ require("../assets/game_bg.png") }>
      <MaterialIcons
        style={ styles.icon }
        name="menu"
        size={ 28 }
        onPress={ pressHandler }
      />
      <View style={ styles.titleView }>
        <Image style={ styles.image } source={ require("../assets/heart_logo.png") }/>
        <Text style={ styles.title }>{ title }</Text>
      </View>
    </ImageBackground>
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
  titleView: {
    flexDirection: "row"
  },
  image: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  }
});

export default Header;