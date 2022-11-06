import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import ChangePasswordComponent from "./../components/changePassword/ChangePassword";

const ChangePasswordContainer = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <ChangePasswordComponent />
        </View>
    )
}

export default ChangePasswordContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})