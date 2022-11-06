import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


const Report = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <Text>Report</Text>
        </View>
    )
}

export default Report;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})