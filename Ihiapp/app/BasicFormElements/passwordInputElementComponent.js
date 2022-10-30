import React from 'react';
import { TextInput } from "react-native";

// custom CSS and JS
import formElementStyles from "./../assets/css/formElement";


function PasswordInputElementComponent(props) {
    return (
        <TextInput
            style={formElementStyles.input}
            onChangeText={props.onChangeTextHandler}
            value={props.value}

            secureTextEntry={true}
        />
    )
}

export default PasswordInputElementComponent;
