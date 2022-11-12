import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

// custom CSS and JS
import globalStyles from "../../assets/css/global";

// third party library
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeCardView = () => {

    useEffect(() => {
        console.log("Ho cmeard view js");
    });
    bookAppointMentHandler = () => { }
    associateNewQrHandler = () => { }
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="doctor" size={50} color="#900" />
            <Text style={[ globalStyles.textStyle ]}>Clients</Text>
        </View>
    )
}

export default HomeCardView;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", borderColor: "#777", borderWidth: 1, borderRadius: 10, alignItems: "center", justifyContent: "center", paddingVertical: 10, marginVertical: 10, shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3 }
})