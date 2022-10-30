// third party library
import * as Keychain from 'react-native-keychain';

export const loginSubmitHandler = async (username, password) => await Keychain.setGenericPassword(username, password);
export const checkUserStatus = async () => {
    try {
        const credentials = await Keychain.getGenericPassword();
    }
    catch (error) {
        console.log('Keychain couldn\'t be accessed!', error);
    }
}

export const navigationManagement = (navigation, screenName) => {
    navigation.navigate(screenName);
}