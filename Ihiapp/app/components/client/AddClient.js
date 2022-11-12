import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import ClientCardView from '../../cardView/client/clientCardView';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import FormJSON from "../../../data/formData";
import TextInputElementComponent from '../../BasicFormElements/textInputElementComponent';

const AddClient = () => {
    useEffect(() => {
        console.log("home container js");
    });
    return (
        <View style={styles.container}>
            { FormJSON.Registration.Client.map((v, i) => {
                return <GenerateText />
            })}
        </View>
    )
}

export default AddClient;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 10 }
});

const GenerateText = () => {
    return (<Text style={[globalStyles.textStyle]}>Text</Text>)
}