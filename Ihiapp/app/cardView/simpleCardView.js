import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

// custom CSS and JS
import globalStyles from "./../assets/css/global"

// third party library
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';


const SimpleCardView = () => {

    useEffect(() => {
        console.log("simple card view js");
    });
    bookAppointMentHandler = () => { }
    associateNewQrHandler = () => { }
    return (
        <View style={styles.container}>
            <View style={[styles.containers]}>
                <View style={[styles.imageContainer]}>
                    <Image source={require("./../assets/img/user.jpg")} style={[styles.imageStyle]} />
                </View>
                <View style={[styles.content]}>
                    <View style={[styles.contentHeader]}>
                        <View style={{ flex: 2 }}>
                            <Text style={[globalStyles.textStyle]}>Patient ID - 001</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", paddingRight: 15 }}>
                            <FontAwesomeIcons name="plus-circle" size={20} color="#900" style={{ marginRight: 10 }} />
                            <FontAwesomeIcons name="edit" size={20} color="#900" />
                        </View>
                    </View>

                    <View style={[styles.contentBody]}>
                        <Text style={[globalStyles.textStyle]}>Name</Text>
                        <View>
                            <View style={[{ flexDirection: "row" }]}>
                                <View style={[{ flex: 1 }]}>
                                    <Text style={[globalStyles.textStyle]}>13 years</Text>
                                </View>
                                <View style={[{ flex: 1 }]}>
                                    <Text style={[globalStyles.textStyle]}>10/19/1992</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={[globalStyles.textStyle]}><FontAwesomeIcons name="phone" size={13} color="#900" style={{ color: "#f66" }} />999999999999</Text>
                            <Text style={[globalStyles.textStyle]}><EntypoIcons name="email" size={13} color="#900" style={{ color: "#f66" }} />abccccccccccccccccccc@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Pressable onPress={bookAppointMentHandler} style={{ backgroundColor: "#1b5a90", paddingVertical: 10, paddingHorizontal: 5, borderRadius: 10, alignItems: "center" }}>
                        <Text>Book Appointment</Text>
                    </Pressable>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Pressable onPress={associateNewQrHandler} style={{ backgroundColor: "#1b5a90", paddingVertical: 10, paddingHorizontal: 5, borderRadius: 10, alignItems: "center" }}>
                        <Text>Associate New QR</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default SimpleCardView;

const styles = StyleSheet.create({
    container: { backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 10, paddingVertical: 20 },
    containers: { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10 },
    imageContainer: { flex: 1 },
    imageStyle: { width: 70, height: 70, borderRadius: 70 },
    content: { flex: 3, },
    contentHeader: { flexDirection: "row", paddingVertical: 5 },
    contentBody: {}
})