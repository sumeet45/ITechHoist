import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom CSS and JS
import ClientComponent from "./../components/client/Client";

const ClientContainer = ({navigation, routeParams}) => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <ClientComponent navigation={navigation} routeParams={routeParams}  />
        </View>
    )
}

export default ClientContainer;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})