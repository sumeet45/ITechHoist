import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import ClientComponent from "./../components/client/Client";

const ClientContainer = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <ClientComponent />
        </View>
    )
}

export default ClientContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})