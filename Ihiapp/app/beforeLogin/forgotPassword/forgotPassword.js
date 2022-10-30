import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

// custom Css
import globalStyles from '../../assets/css/global';
import EmailInputElementComponent from "../../BasicFormElements/emailInputElementComponent";

const ForgotPassword = () => {
    const [ email, setEmail ] = useState("");
    const onChangeEmailHandler = (email) => setEmail(email);
    const forgotPasswordSubmitHandler = () => {}

    return (
        <View>
            <EmailInputElementComponent onChangeTextHandler={onChangeEmailHandler} value={email} placeholderName="Email" />

            <Pressable onPress={forgotPasswordSubmitHandler} style={[styles.submitBtnPressable]}>
                <Text style={[globalStyles.textStyle, styles.submitBtnText]}>Submit</Text>
            </Pressable>
            
        </View>
    )
}


export default ForgotPassword;

const styles = StyleSheet.create({
    container: { padding: 10 },
    input: { height: 40, marginBottom: 15, borderWidth: 1, padding: 10, color: "#000" },
    submitBtnText: { paddingVertical: 10, color: "#fff", fontWeight: "bold", fontSize: 15, alignSelf: "center", textTransform: "uppercase" },
    submitBtnPressable: { backgroundColor: "red", padding: 6, marginBottom: 20 },
})