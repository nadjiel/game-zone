import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function App() {
  const [ people, setPeople ] = useState([
    { name: "Shaun", id: 1 },
    { name: "Yoshi", id: 2 },
    { name: "Mario", id: 3 },
    { name: "Luigi", id: 4 },
    { name: "Peach", id: 5 },
    { name: "Toad", id: 6 },
    { name: "Bowser", id: 7 }
  ]);

  const pressHandler = id => {
    console.log(id)

    setPeople(prevPeople => (
      prevPeople.filter(person => person.id != id)
    ))
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ people }
        renderItem={ ({ item }) => (
          <TouchableOpacity onPress={ () => pressHandler(item.id) }>
            <Text style={ styles.item }>{ item.name }</Text>
          </TouchableOpacity>
        ) }
        keyExtractor={ item => item.id }
        numColumns={ 2 }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10
  }
});
