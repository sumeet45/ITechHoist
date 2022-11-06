import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import DoctorComponent from "../components/doctor/Doctor";

const DoctorPage = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <DoctorComponent />
        </View>
    )
}

export default DoctorPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})