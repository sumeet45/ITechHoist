import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import ClientContainer from "../containers/ClientContainer";

const ClientPage = ({navigation, route}) => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <ClientContainer navigation={navigation} routeParams={route.params} />
        </View>
    )
}

export default ClientPage;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})