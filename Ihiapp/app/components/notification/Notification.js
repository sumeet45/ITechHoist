import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const Notification = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})