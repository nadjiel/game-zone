import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/Card";

import { globalStyles } from "../styles/global";

function Home({ navigation }) {
  const [ reviews, setReviews ] = useState([
    { title: "Zelda, Breath of Fresh Air", rating: 5, body: "Lorem ipsum", key: '1' },
    { title: "Gotta Catch Them All (again)", rating: 4, body: "Lorem ipsum", key: '2' },
    { title: `Not So "Final" Fantasy`, rating: 3, body: "Lorem ipsum", key: '3' }
  ]);
  const [ modalOpen, setModalOpen ] = useState(false);

  return (
    <View style={ globalStyles.container }>
      <Modal visible={ modalOpen } animationType="slide">
        <View>
          <MaterialIcons
            style={ { ...styles.modalToggle, ...styles.modalClose } }
            name="close"
            size={ 24 }
            onPress={ () => setModalOpen(false) }
          />
          <Text>Modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        style={ styles.modalToggle }
        name="add"
        size={ 24 }
        onPress={ () => setModalOpen(true) }
      />

      <FlatList
        data={ reviews }
        renderItem={ ({ item }) => (
          <TouchableOpacity
            onPress={ () => navigation.navigate("ReviewDetails", item) }
          >
            <Card>
              <Text style={ globalStyles.title }>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        ) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
});

export default Home;