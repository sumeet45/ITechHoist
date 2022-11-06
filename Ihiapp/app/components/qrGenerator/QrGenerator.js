import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const QrGenerator = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>QrGenerator</Text>
        </View>
    )
}

export default QrGenerator;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})