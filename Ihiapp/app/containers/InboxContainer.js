import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";

// custom css and JS
import Inbox from '../components/inbox/Inbox';

// third party plugins


const InboxContainer = () => {
    useEffect(() => {
        console.log("Home page js");
    });
    return (
        <View style={styles.container}>
            <Inbox />
        </View>
    )
}

export default InboxContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})