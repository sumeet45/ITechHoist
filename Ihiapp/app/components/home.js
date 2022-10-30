import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
    useEffect(() => {
        console.log("home js");
    });
    return (
        <View style={styles.container}>
            <Text style={{ color: "red" }}>Homee js</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})