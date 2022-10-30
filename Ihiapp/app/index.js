import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInPage from "./beforeLogin/login/login";
import ForgotPasswordPage from './beforeLogin/forgotPassword/forgotPassword';
import ClientRegisterPage from './beforeLogin/clientRegister/clientRegister';
import FacilityRegisterPage from './beforeLogin/facilityRegister/facilityRegister';

import HomePage from "./components/home";

const LogInScreen = ({ route, navigation }) => (<LogInPage navigation={navigation} routeParams={route.params} />)
const ForgotPasswordScreen = ({ route, navigation }) => (<ForgotPasswordPage navigation={navigation} routeParams={route.params} />)
const ClientRegisterScreen = ({ route, navigation }) => (<ClientRegisterPage navigation={navigation} routeParams={route.params} />)
const FacilityRegisterScreen = ({ route, navigation }) => (<FacilityRegisterPage navigation={navigation} routeParams={route.params} />)

const HomeScreen = ({ route, navigation }) => (<HomePage navigation={navigation} routeParams={route.params} />)

const Stack = createNativeStackNavigator();

function App(props) {
  React.useEffect(() => {
    console.log("app/index js", props.loggedIn);
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <>
          {props.loggedIn === false ?
            (
              <>
                <Stack.Screen name="Login" component={LogInScreen}  options={{headerShown: false}} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  options={{headerShown: false}} />
                <Stack.Screen name="ClientRegister" component={ClientRegisterScreen}  options={{headerShown: false}} />
                <Stack.Screen name="FacilityRegister" component={FacilityRegisterScreen}  options={{headerShown: false}} />
              </>
            )
            :
            (
              <>
                <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
              </>)
          }
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;