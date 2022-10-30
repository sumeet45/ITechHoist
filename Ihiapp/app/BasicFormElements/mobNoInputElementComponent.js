import React from 'react';
import { TextInput } from "react-native";

// custom CSS and JS
import formElementStyles from "./../assets/css/formElement";


function MobNoInputElementComponent(props) {
    return (
        <TextInput
            style={[formElementStyles.input]}
            onChangeText={props.onChangeTextHandler}
            value={props.value}

            allowFontScaling
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            autoFocus={true}
            blurOnSubmit={true}
            cursorColor="red"
            selectionColor="red"
            selectTextOnFocus={true}
            placeholder={props.placeholderName}
            placeholderTextColor="#000" />
    )
}

export default MobNoInputElementComponent;