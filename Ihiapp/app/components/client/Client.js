import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import ClientCardView from '../../cardView/client/clientCardView';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const Client = ({navigation, routeParams}) => {
    useEffect(() => {
        console.log("add client 1js", );
    });
    addClientHandler = () => navigation.navigate("AddClient");
    return (
        <View style={styles.container}>
            <View style={[{ flexDirection: "row" }]}>
                <View style={[{ flex: 1 }]}>
                    <Text style={[globalStyles.textStyle, { fontSize: 23, fontWeight: "bold", marginBottom: 15 }]}>Client List</Text>
                </View>
                <View style={[{ flex: 1, alignItems: "flex-end", paddingRight: 10 }]}>
                    <EntypoIcons name="edit" size={20} color="#900" onPress={addClientHandler} />
                </View>
            </View>

            <ClientCardView />
        </View>
    )
}

export default Client;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 10 }
})