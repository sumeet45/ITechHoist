import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";

// custom css and JS


// third party plugins


const Inbox = () => {
    useEffect(() => {
        console.log("Home page js");
    });
    return (
        <View style={styles.container}>
            <Text>Inbox</Text>
        </View>
    )
}

export default Inbox;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})