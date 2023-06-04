import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 18
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  }
});

const images = {
  ratings: {
    '1': require("../assets/rating-1.png"),
    '2': require("../assets/rating-2.png"),
    '3': require("../assets/rating-3.png"),
    '4': require("../assets/rating-4.png"),
    '5': require("../assets/rating-5.png")
  }
}

export { globalStyles, images };