import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const Appointment = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>Appointment</Text>
        </View>
    )
}

export default Appointment;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})