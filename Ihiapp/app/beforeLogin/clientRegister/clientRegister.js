import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// custom CSS and JS
import globalStyles from '../../assets/css/global';
import TextInputElementComponent from '../../BasicFormElements/textInputElementComponent';
import MobNoInputElementComponent from "../../BasicFormElements/mobNoInputElementComponent";
import EmailInputElementComponent from "../../BasicFormElements/emailInputElementComponent";


const FacilityRegister = () => {
    const [email, setEmail] = useState("");
    const [clientName, setClientName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const clientRegisterHandler = () => {
        console.log("Form Values", clientName, email, mobileNumber, address);
    }


    const onChangeClientNameHandler = (name) => setClientName(name);
    const onChangeMobileNumberHandler = (num) => setMobileNumber(num);
    const onChangeEmailHandler = (email) => setEmail(email);

    return (
        <View>
            <EmailInputElementComponent onChangeTextHandler={onChangeEmailHandler} value={email} placeholderName="Email" />
            <TextInputElementComponent onChangeTextHandler={onChangeClientNameHandler} value={clientName} placeholderName="Client Name" />
            <MobNoInputElementComponent onChangeTextHandler={onChangeMobileNumberHandler} value={mobileNumber} placeholderName="Mobile Number" />

            <Pressable onPress={clientRegisterHandler} style={[styles.submitBtnPressable]}>
                <Text style={[globalStyles.textStyle, styles.submitBtnText]}>Submit</Text>
            </Pressable>
        </View>
    )
}


export default FacilityRegister;

const styles = StyleSheet.create({
    container: { padding: 10 },
    input: { height: 40, marginBottom: 15, borderWidth: 1, padding: 10, color: "#000" },
    submitBtnText: { paddingVertical: 10, color: "#fff", fontWeight: "bold", fontSize: 15, alignSelf: "center", textTransform: "uppercase" },
    submitBtnPressable: { backgroundColor: "red", padding: 6, marginBottom: 20 },
})