import { View, Text } from "react-native";

import { globalStyles } from "../styles/global";

function ReviewDetails({ route }) {
  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.title }>{ route.params.title }</Text>
      <Text style={ globalStyles.title }>{ route.params.body }</Text>
      <Text style={ globalStyles.title }>{ route.params.rating }</Text>
    </View>
  )
}

export default ReviewDetails;