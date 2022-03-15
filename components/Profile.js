import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { firebase_db } from "../firebaseConfig.js"


export default function Profile({content}) {
    // console.disableYellowBox = true;

    let mbtiUser = [];

    const [mbti, setMbti] = useState([])

    useEffect(() => {

        firebase_db.ref('mbti').once('value').then((snapshot) => {
            console.log("main firebase data connect success")
            let mbtiDB = snapshot.val();
            setMbti(mbtiDB)
        });

    }, [])

    const showUser = () => {

        console.log("Profile Button Pressed : " + content.type);

        mbti.map((mbtiData, i) => {
            if ((mbtiData.mbti) == content.type) {
                mbtiUser.push(mbtiData.name);
            }
        })
        
        if (mbtiUser.length == 0) {
            mbtiUser.push('없음');
        }

        console.log("@@@ find complete. user list : " + mbtiUser)
        Alert.alert(content.type + ' - ' + content.title, mbtiUser.toString());

    }


    return (

        <TouchableOpacity style={styles.middleButton} onPress={showUser}>
            <View style={styles.profileCard}>
                <Text style={styles.profileCardName}>{content.type}</Text>
                <Text style={styles.profileCardSub}>{content.title}</Text>
            </View>
            <Text style={styles.middleButtonText}>{content.content}</Text>
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    middleContainer: {
        flexWrap: "wrap",
        flexDirection: "row", 
        margin: 10,
        padding: 5,
        marginLeft: 10,
    },
    middleButton: {
        width: 160,
        // height: 180,
        borderRadius: 10,
        backgroundColor: "#ffd6aa",
        padding: 20,
        margin: 6,
    },
    middleButtonText: {
        color: "#7f7f7f",
        fontWeight: "700",
        textAlign: "center",
    },
    profileCard: {
        margin: 10,
        marginBottom: 15,
      },
    profileCardName: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    },
    profileCardSub: {
        fontSize: 15,
        textAlign: "center",
    },
});