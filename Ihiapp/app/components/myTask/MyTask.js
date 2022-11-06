import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const MyTask = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>MyTask</Text>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})