import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import NotificationComponent from "./../components/notification/Notification";

const NotificationContainer = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <NotificationComponent />
        </View>
    )
}

export default NotificationContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})