import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const Doctor = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>Doctor</Text>
        </View>
    )
}

export default Doctor;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})