import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from "react-native";

// custom CSS and JS
import globalStyles from "./../../assets/css/global";
import formElementStyles from '../../assets/css/formElement';
import PasswordInputElementComponent from "./../../BasicFormElements/passwordInputElementComponent";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onChangeOldPasswordHandler = (text) => setOldPassword(text);
    const onChangePasswordHandler = (text) => setPassword(text);
    const onChangeConfirmPasswordHandler = (text) => setConfirmPassword(text);

    const changePasswordHandler = () => {

    }

    useEffect(() => {
        console.log("change Password component");
    });
    return (
        <View style={styles.container}>
            <PasswordInputElementComponent onChangeTextHandler={onChangeOldPasswordHandler} value={oldPassword} placeholderName="Old Password" />
            <PasswordInputElementComponent onChangeTextHandler={onChangePasswordHandler} value={password} placeholderName="Password" />
            <PasswordInputElementComponent onChangeTextHandler={onChangeConfirmPasswordHandler} value={confirmPassword} placeholderName="Confirm Password" />

            <Pressable onPress={changePasswordHandler} style={[formElementStyles.submitContainer]}>
                <Text style={[globalStyles.textStyle, formElementStyles.submitButton]}>Change Password</Text>
            </Pressable>
        </View>
    )
}

export default ChangePassword;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1, padding: 20 }
})