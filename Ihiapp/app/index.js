import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInPage from "./beforeLogin/login/login";
import ForgotPasswordPage from './beforeLogin/forgotPassword/forgotPassword';
import ClientRegisterPage from './beforeLogin/clientRegister/clientRegister';
import FacilityRegisterPage from './beforeLogin/facilityRegister/facilityRegister';

import HomePage from "./pages/home";
import AppointmentPage from './pages/Appointment';
import ChangePasswordPage from './pages/ChangePassword';
import ClientPage from './pages/Client';
import DoctorPage from './pages/Doctor';
import MyTaskPage from './pages/MyTask';
import NotificationPage from './pages/Notification';
import QrgeneratorPage from './pages/Qrgenerator';
import ReportPage from './pages/Report';
import InboxPage from './pages/Inbox';

const LogInScreen = ({ route, navigation }) => (<LogInPage navigation={navigation} routeParams={route.params} />)
const ForgotPasswordScreen = ({ route, navigation }) => (<ForgotPasswordPage navigation={navigation} routeParams={route.params} />)
const ClientRegisterScreen = ({ route, navigation }) => (<ClientRegisterPage navigation={navigation} routeParams={route.params} />)
const FacilityRegisterScreen = ({ route, navigation }) => (<FacilityRegisterPage navigation={navigation} routeParams={route.params} />)

const HomeScreen = ({ route, navigation }) => (<HomePage navigation={navigation} routeParams={route.params} />)
const AppointmentScreen = ({ route, navigation }) => (<AppointmentPage navigation={navigation} routeParams={route.params} />)
const ChangePasswordScreen = ({ route, navigation }) => (<ChangePasswordPage navigation={navigation} routeParams={route.params} />)
const ClientScreen = ({ route, navigation }) => (<ClientPage navigation={navigation} routeParams={route.params} />)
const DoctorScreen = ({ route, navigation }) => (<DoctorPage navigation={navigation} routeParams={route.params} />)
const MyTaskScreen = ({ route, navigation }) => (<MyTaskPage navigation={navigation} routeParams={route.params} />)
const NotificationScreen = ({ route, navigation }) => (<NotificationPage navigation={navigation} routeParams={route.params} />)
const QrgeneratorScreen = ({ route, navigation }) => (<QrgeneratorPage navigation={navigation} routeParams={route.params} />)
const ReportScreen = ({ route, navigation }) => (<ReportPage navigation={navigation} routeParams={route.params} />)
const InboxScreen = ({ route, navigation }) => (<InboxPage navigation={navigation} routeParams={route.params} />)




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
                <Stack.Screen name="Appointment" component={AppointmentScreen}  options={{headerShown: false}} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Client" component={ClientScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Doctor" component={DoctorScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Inbox" component={InboxScreen}  options={{headerShown: false}} />
                <Stack.Screen name="MyTask" component={MyTaskScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Notification" component={NotificationScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Qrgenerator" component={QrgeneratorScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Report" component={ReportScreen}  options={{headerShown: false}} />
              </>
            )
          }
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;