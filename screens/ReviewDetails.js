import { View, Text, Image, StyleSheet } from "react-native";

import Card from "../components/Card";

import { globalStyles, images } from "../styles/global";

function ReviewDetails({ route }) {
  return (
    <View style={ globalStyles.container }>
      <Card>
        <Text style={ globalStyles.title }>{ route.params.title }</Text>
        <Text style={ globalStyles.title }>{ route.params.body }</Text>
        <View style={ styles.rating }>
          <Text>Game Zone rating: </Text>
          <Image source={ images.ratings[route.params.rating] } />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});

export default ReviewDetails;