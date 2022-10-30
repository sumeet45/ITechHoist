import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

// custom Css
import globalStyles from '../../assets/css/global';
import TextInputElementComponent from '../../BasicFormElements/textInputElementComponent';
import  MobNoInputElementComponent from "../../BasicFormElements/mobNoInputElementComponent";
import  EmailInputElementComponent from "../../BasicFormElements/emailInputElementComponent";
import  MultilineInputElementComponent from "../../BasicFormElements/multilineInputElementComponent";

const FacilityRegister = () => {
    const [email, setEmail] = useState("");
    const [clinicName, setClinicName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const facilityRegisterHandler = () => {
        console.log("Form Values", clinicName, email, mobileNumber, address);
    }


    const onChangeClinicNameHandler = (name) => setClinicName(name);
    const onChangeMobileNumberHandler = (num) => setMobileNumber(num);
    const onChangeEmailHandler = (email) => setEmail(email);
    const onChangeAddressHandler = (text) => setAddress(text)
    return (
        <View>
            <TextInputElementComponent onChangeTextHandler={onChangeClinicNameHandler} value={clinicName} placeholderName="Clinic Name" />
            <MobNoInputElementComponent onChangeTextHandler={onChangeMobileNumberHandler} value={mobileNumber} placeholderName="Mobile Number" />
            <EmailInputElementComponent onChangeTextHandler={onChangeEmailHandler} value={email} placeholderName="Email" />
            <MultilineInputElementComponent onChangeTextHandler={onChangeAddressHandler} value={address} placeholderName="Address" />
            <Pressable onPress={facilityRegisterHandler} style={[styles.submitBtnPressable]}>
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