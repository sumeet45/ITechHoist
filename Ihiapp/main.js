import React, { useEffect } from 'react';
import { View } from "react-native";
import Keychain from "react-native-keychain";
import { useDispatch, useSelector } from 'react-redux';
import Index from "./app/index";
import { updateLogIn } from './app/reducers/accountSlice';

function Main() {
    const loggedIn = useSelector(state => state.account.loggedIn);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const credentials = await Keychain.getGenericPassword();
                if (credentials) {
                    dispatch(updateLogIn(true));
                } else {
                    console.log("No credentials stored");
                }
            } catch (error) {
                console.log("Keychain couldn't be accessed!", error);
            }
        })();
    }, []);
    useEffect(()=> {
        console.log("main.js", loggedIn);
    })
    return (
        <View style={{ flex: 1 }}>
            <Index loggedIn={loggedIn} />
        </View>
    )
}

export default Main;