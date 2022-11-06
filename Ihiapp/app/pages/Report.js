import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import ReportComponent from "../components/report/Report";

const ReportPage = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <ReportComponent />
        </View>
    )
}

export default ReportPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})