import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

// custom CSS and JS
import globalStyles from "../../assets/css/global";

// third party library
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';



const HomeUserInfoCardView = () => {

    useEffect(() => {
        console.log("Ho cmeard view js");
    });
    bookAppointMentHandler = () => { }
    associateNewQrHandler = () => { }
    return (
        <View style={styles.container}>
            <Image source={require("./../../assets/img/user.jpg")} style={{ width: 50, height: 50 }} />
            <Text style={[ globalStyles.textStyle ]}>User Name</Text>
            <Text style={[ globalStyles.textStyle ]}>Address</Text>
            <Text style={[ globalStyles.textStyle ]}>Website Link</Text>
            <Text style={[ globalStyles.textStyle ]}>Mail Link</Text>
            <Text style={[ globalStyles.textStyle ]}>Phone number</Text>
        </View>
    )
}

export default HomeUserInfoCardView;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", borderColor: "#777", borderWidth: 1, borderRadius: 10, padding: 50 }
})