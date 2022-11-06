import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";

// custom css and JS
import DrawerComponent from '../drawer/drawer';

// third party plugins


const HomePage = () => {
    useEffect(() => {
        console.log("Home page js");
    });
    return (
        <View style={styles.container}>
            <DrawerComponent />
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})