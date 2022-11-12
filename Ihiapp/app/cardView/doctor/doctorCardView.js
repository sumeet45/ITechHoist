import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

// custom CSS and JS
import globalStyles from "../../assets/css/global";

// third party library
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const DoctorCardView = () => {

    useEffect(() => {
        console.log("Doctor card view js");
    });
    doctorProfileHandler = () => { }

    return (
        <View style={styles.container}>
            <View style={[styles.containers]}>
                <View style={[styles.imageContainer]}>
                    <Image source={require("./../../assets/img/user.jpg")} style={[styles.imageStyle]} />
                </View>
                <View style={[styles.content]}>
                    <View style={[styles.contentHeader]}>
                        <View style={{ flex: 2 }}>
                            <Text style={[globalStyles.textStyle]}>Doctor ID - 001</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", paddingRight: 15 }}>
                            <MaterialCommunityIcons name="android-messages" size={20} color="#900" style={{ marginRight: 10 }} />
                            <FontAwesomeIcons name="edit" size={20} color="#900" />
                            <MaterialCommunityIcons name="delete" size={20} color="#900" />
                        </View>
                    </View>

                    <View style={[styles.contentBody]}>
                        <Text style={[globalStyles.textStyle]}>Name</Text>
                        <View>
                            <View style={[{ flexDirection: "row" }]}>
                                <View style={[{ flex: 1 }]}>
                                    <Text style={[globalStyles.textStyle]}>Profession</Text>
                                    <Text style={[globalStyles.textStyle]}>Ratings</Text>
                                </View>
                                <View style={[{ flex: 1 }]}>
                                    <Text style={[globalStyles.textStyle]}>2 Y+ exp</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Pressable onPress={doctorProfileHandler} style={{ backgroundColor: "#1b5a90", paddingVertical: 10, paddingHorizontal: 5, borderRadius: 10, alignItems: "center" }}>
                        <Text>Profile</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default DoctorCardView;

const styles = StyleSheet.create({
    container: { backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 10, paddingVertical: 20, marginBottom: 10 },
    containers: { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10 },
    imageContainer: { flex: 1 },
    imageStyle: { width: 70, height: 70, borderRadius: 70 },
    content: { flex: 3, },
    contentHeader: { flexDirection: "row", paddingVertical: 5 },
    contentBody: {}
})