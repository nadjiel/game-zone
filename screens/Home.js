import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

import { globalStyles } from "../styles/global";

function Home({ navigation }) {
  const [ reviews, setReviews ] = useState([
    { title: "Zelda, Breath of Fresh Air", rating: 5, body: "Lorem ipsum", key: '1' },
    { title: "Gotta Catch Them All (again)", rating: 4, body: "Lorem ipsum", key: '2' },
    { title: `Not So "Final" Fantasy`, rating: 3, body: "Lorem ipsum", key: '3' }
  ]);

  return (
    <View style={ globalStyles.container }>
      <FlatList
        data={ reviews }
        renderItem={ ({ item }) => (
          <TouchableOpacity
            onPress={ () => navigation.navigate("ReviewDetails", item) }
          >
            <Text style={ globalStyles.title }>{ item.title }</Text>
          </TouchableOpacity>
        ) }
      />
    </View>
  )
}

export default Home;