import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom css and JS
import InboxContainer from "./../containers/InboxContainer";

// third party plugins


const InboxPage = () => {
    useEffect(() => {
        console.log("Home page js");
    });
    return (
        <View style={styles.container}>
            <InboxContainer />
        </View>
    )
}

export default InboxPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})