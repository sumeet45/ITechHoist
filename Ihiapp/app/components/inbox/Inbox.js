import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import globalStyles from '../../assets/css/global';

// custom css and JS


// third party plugins


const Inbox = () => {
    useEffect(() => {
        console.log("Home page js");
    });
    return (
        <View style={styles.container}>
            <View style={[{ flexDirection: "row" }]}>
                <View style={[{ flex: 1, alignItems: "center", paddingBottom: 10 }, { borderBottomColor: "red", borderBottomWidth: 8 }]}>
                    <Text style={[ globalStyles.textStyle ]}>Messages</Text>
                </View>
                <View style={[{ flex: 1, alignItems: "center", paddingBottom: 10 }, { borderBottomColor: "red", borderBottomWidth: 8 }]}>
                    <Text style={[ globalStyles.textStyle ]}>Sent</Text>
                </View>
            </View>
        </View>
    )
}

export default Inbox;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})