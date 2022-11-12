import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import EntypoIcons from "react-native-vector-icons/Entypo";
import IonIcons from "react-native-vector-icons/Ionicons";
import DoctorCardView from '../../cardView/doctor/doctorCardView';

const Doctor = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            <View style={[{ flexDirection: "row" }]}>
                <View style={[{ flex: 1 }]}>
                    <Text style={[globalStyles.textStyle, { fontSize: 23, fontWeight: "bold", marginBottom: 15 }]}>Doctor List</Text>
                </View>
                <View style={[{ flex: 1, alignItems: "flex-end", paddingRight: 10 }]}>
                    <IonIcons name="create" size={20} color="#900" />
                </View>
            </View>
            <DoctorCardView />
            <DoctorCardView />
        </View>
    )
}

export default Doctor;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 10 }
})