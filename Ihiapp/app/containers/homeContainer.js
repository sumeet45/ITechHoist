import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import HomeComponent from "../components/home/HomeComponent";

const HomeContainer = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <HomeComponent />
        </View>
    )
}

export default HomeContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})