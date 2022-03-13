import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function Profile() {
    // console.disableYellowBox = true;

    const oneAlert = () => {
        Alert.alert('Button Click', 'Button Content...');
        console.log("Profile Button Pressed");
    }

    return (
        <View style={styles.middleContainer} horizontal indicatorStyle={"white"}>

            <TouchableOpacity style={styles.middleButton} onPress={oneAlert}>
                <View style={styles.profileCard}>
                    <Text style={styles.profileCardName}>이름이올시다</Text>
                    <Text style={styles.profileCardSub}>정보이올시다</Text>
                </View>
                <Text style={styles.middleButtonText}>내용?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middleButton} onPress={oneAlert}>
            <View style={styles.profileCard}>
                    <Text style={styles.profileCardName}>이름이올시다</Text>
                    <Text style={styles.profileCardSub}>정보이올시다</Text>
                </View>
                <Text style={styles.middleButtonText}>내용?</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    middleContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 5,
        marginLeft: 10,
        height: '100%',
        alignSelf: 'center'
    },
    middleButton: {
        width: 160,
        height: 180,
        borderRadius: 10,
        backgroundColor: "#ffd6aa",
        padding: 20,
        margin: 6
    },
    middleButtonText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center"
    },
    profileCard: {
        flex: 3,
        margin: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-around'
      },
    profileCardName: {
        backgroundColor: "#e5e5e5",
        fontSize: 20,
        fontWeight: "500"
    },
    profileCardSub: {
        backgroundColor: "#e5e5e5",
        fontSize: 15,
    },
});