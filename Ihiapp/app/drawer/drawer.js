import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";

// custom css and JS
import HomeContainer from "./../containers/homeContainer";
import ClientContainer from "./../containers/ClientContainer";
import DoctorContainer from "./../containers/DoctorContainer";
import AppointmentContainer from "./../containers/AppointmentContainer";
import InboxContainer from "./../pages/Inbox";
import NotificationContainer from "./../containers/NotificationContainer";
import ReportContainer from "./../containers/ReportContainer";
import QrgeneratorContainer from "./../containers/QrgeneratorContainer";
import MyTaskContainer from "./../containers/MyTaskContainer";
import ChangePasswordContainer from "./../containers/ChangePasswordContainer";

// third party plugins
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
    useEffect(() => {
        console.log("home page js");
    });
    return (
        <View style={styles.container}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Homes" component={HomeContainer} />
                <Drawer.Screen name="Clients" component={ClientContainer} />
                <Drawer.Screen name="Doctors" component={DoctorContainer} />
                <Drawer.Screen name="Appointments" component={AppointmentContainer} />
                <Drawer.Screen name="Inboxs" component={InboxContainer} />
                <Drawer.Screen name="Notifications" component={NotificationContainer} />
                <Drawer.Screen name="Reports" component={ReportContainer} />
                <Drawer.Screen name="QrGenerators" component={QrgeneratorContainer} />
                <Drawer.Screen name="MyTasks" component={MyTaskContainer} />
                <Drawer.Screen name="ChangePasswords" component={ChangePasswordContainer} />
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerComponent;

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 }
})