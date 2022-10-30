import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


// custom CSS and JS
import globalStyles from "./../../assets/css/global";
import TextInputElementComponent from '../../BasicFormElements/textInputElementComponent';
import PasswordInputElementComponent from "../../BasicFormElements/passwordInputElementComponent";
import { loginSubmitHandler, navigationManagement } from "./../../assets/js/commonFunction";
import { updateLogIn } from '../../reducers/accountSlice';

// custom components

// third party library
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
    const loggedIn = useSelector(state => state.account.loggedIn)
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUsernameHandler = (text) => setUsername(text);
    const onChangePasswordHandler = (text) => setPassword(text);
    
    const forgotPasswordHandler = () => navigationManagement(navigation, "ForgotPassword");
    const clientRegisterHandler = () => navigationManagement(navigation, "ClientRegister");
    const facilityRegisterHandler = () => navigationManagement(navigation, "FacilityRegister");

    const loginHandler = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(r => r.json())
            .then(r => {
                console.log(r);
                dispatch(updateLogIn(true));
            });
        loginSubmitHandler(username, password);
    }

    useEffect(() => {
        console.log("login js");
    })
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInputElementComponent onChangeTextHandler={onChangeUsernameHandler} value={username} placeholderName="User Name" />
                <PasswordInputElementComponent onChangeTextHandler={onChangePasswordHandler} value={password} placeholderName="Password" />
                
                <Text style={[globalStyles.textStyle, styles.forgotPasswordTxt]} onPress={forgotPasswordHandler}>Forgot Password</Text>

                <Pressable onPress={loginHandler} style={[styles.logInContainer]}>
                    <Text style={[globalStyles.textStyle, styles.submitButton]}>log in</Text>
                </Pressable>
                
                <Text style={[globalStyles.textStyle, styles.orText]}>OR</Text>
                
                <View style={[styles.registerContainer]}>
                    <View style={[styles.registerContainerView]}>
                        <Text style={[globalStyles.textStyle, styles.registerBtn]} onPress={clientRegisterHandler}>Client Register</Text>
                    </View>
                    <View style={[styles.registerContainerView]}>
                        <Text style={[globalStyles.textStyle, styles.registerBtn]} onPress={facilityRegisterHandler}>Facility Register</Text>
                    </View>
                </View>
                
            </View>

        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: { padding: 10 },
    submitButton: { paddingVertical: 10, color: "#fff", fontWeight: "bold", fontSize: 15, alignSelf: "center", textTransform: "uppercase" },
    registerBtn: { fontWeight: "bold", fontSize: 15, textTransform: "uppercase" },
    orText: { alignSelf: "center", marginBottom: 20 },
    registerContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    registerContainerView: { flex: 1 },
    logInContainer: { backgroundColor: "red", padding: 6, marginBottom: 20 },
    forgotPasswordTxt: { alignSelf: "flex-end", marginBottom: 15 }
});
