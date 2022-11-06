import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import MyTaskComponent from "../components/myTask/MyTask";

const MyTaskPage = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <MyTaskComponent />
        </View>
    )
}

export default MyTaskPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})