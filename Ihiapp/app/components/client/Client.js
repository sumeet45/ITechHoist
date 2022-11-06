import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import SimpleCardView from '../../cardView/simpleCardView';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const Client = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>

            <View style={[{ flexDirection: "row" }]}>
                <View style={[{ flex: 1 }]}>
                    <Text style={[globalStyles.textStyle, { fontSize: 23, fontWeight: "bold", marginBottom: 15 }]}>Client List</Text>
                </View>
                <View style={[{ flex: 1, alignItems: "flex-end", paddingRight: 10 }]}>
                    <EntypoIcons name="edit" size={20} color="#900" />
                </View>
            </View>


            <SimpleCardView />
        </View>
    )
}

export default Client;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 5 }
})