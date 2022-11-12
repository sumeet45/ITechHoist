import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import HomeCardView from '../../cardView/home/homeCardView';
import HomeUserInfoCardView from '../../cardView/home/homeUserInfoCardView';

const HomeComponent = () => {
    useEffect(() => {
        console.log("home js");
    });
    findDoctorHandler = () => {}
    findClientsHandler = () => {}
    addClientHandler = () => {}
    nearMeHandler = () => {}
    return (
        <ScrollView style={styles.container}>
            <HomeUserInfoCardView />
            <HomeCardView />
            <HomeCardView />
            <HomeCardView />
            <HomeCardView />
            <Pressable onPress={findDoctorHandler} style={[ globalStyles.pressableBtnStyle, { marginTop: 20 } ]}>
                <Text style={[ globalStyles.textStyle ]}>Doctor</Text>
            </Pressable>
            <Pressable onPress={findClientsHandler} style={[ globalStyles.pressableBtnStyle ]}>
                <Text style={[ globalStyles.textStyle ]}>Clients</Text>
            </Pressable>
            <Pressable onPress={addClientHandler} style={[ globalStyles.pressableBtnStyle ]}>
                <Text style={[ globalStyles.textStyle ]}>Add Clients</Text>
            </Pressable>
            <Pressable onPress={nearMeHandler} style={[ globalStyles.pressableBtnStyle ]}>
                <Text style={[ globalStyles.textStyle ]}>Near me</Text>
            </Pressable>
        </ScrollView>
    )
}

export default HomeComponent;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 10 }
})