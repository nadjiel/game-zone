import { View, Text } from "react-native";

import Card from "../components/Card";

import { globalStyles } from "../styles/global";

function ReviewDetails({ route }) {
  return (
    <View style={ globalStyles.container }>
      <Card>
        <Text style={ globalStyles.title }>{ route.params.title }</Text>
        <Text style={ globalStyles.title }>{ route.params.body }</Text>
        <Text style={ globalStyles.title }>{ route.params.rating }</Text>
      </Card>
    </View>
  )
}

export default ReviewDetails;