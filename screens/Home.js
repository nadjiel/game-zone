import { StyleSheet, View, Text } from "react-native";

function Home() {
    return (
        <View style={ styles.container }>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});

export default Home;