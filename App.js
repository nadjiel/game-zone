import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from "react";

export default function App() {
  const [ name, setName ] = useState("Shaun");
  const [ age, setAge ] = useState( 40 );

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        placeholder="Name"
        style={ styles.input }
        onChangeText={ (val) => setName(val) }
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Age"
        style={ styles.input }
        onChangeText={ (val) => setAge(val) }
      />

      <Text>Name: { name }, age: { age }.</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});
