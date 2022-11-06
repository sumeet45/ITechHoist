import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import QrGeneratorComponent from "../components/qrGenerator/QrGenerator";

const QrGeneratorPage = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <QrGeneratorComponent />
        </View>
    )
}

export default QrGeneratorPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})