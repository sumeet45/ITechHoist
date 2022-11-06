import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import AppointmentComponent from "../components/appointment/Appointment";

const AppointmentPage = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <AppointmentComponent />
        </View>
    )
}

export default AppointmentPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})