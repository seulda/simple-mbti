import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DetailOne from '../components/DetailOne.js';

import { firebase_db } from "../firebaseConfig.js"


export default function DetailView({ navigation }) {
    // console.disableYellowBox = true;

    const [state, setState] = useState([])
    const [cateState, setCateState] = useState([])
    const [ready, setReady] = useState(true)

    useEffect(() => {

        firebase_db.ref('mbti').once('value').then((snapshot) => {
            console.log("firebase data connect success")
            let people = snapshot.val();
            setState(people)
            setCateState(people)
            setReady(false)
        });

    }, [])


    const topCategory = (cate) => {
        setCateState(state.filter((teamData) => {
            return teamData.fb == cate
        }))
    }
    const allCategory = () => {
        setCateState(state)
    }


    return (
        <View style={styles.container}>
            <StatusBar style="black" />

            <View style={styles.containerSemi}>
                
                {/* 상단탭 */}
                <View style={styles.topContainer} horizontal indicatorStyle={"white"}>
                    <TouchableOpacity style={styles.topContainerButton} onPress={() => { topCategory('front') }}>
                        <Text style={styles.topContainerButtonText}>Front-End</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topContainerButton} onPress={() => { topCategory('back') }}>
                        <Text style={styles.topContainerButtonText}>Back-End</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.contentContainer}>

                    <TouchableOpacity style={styles.testButton} onPress={allCategory}>
                        <Text style={styles.testButtonText}>전체보기</Text>
                    </TouchableOpacity>

                    {
                        cateState.map((content, i) => {
                            return (<DetailOne content={content} key={i} />)
                        })
                    }

                </ScrollView>

            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#ffd6aa",
        alignItems: "center"
    },
    containerSemi: {
        backgroundColor: "#fff",
        padding: 8,
    },

    topContainer: {
        flexDirection: "row",
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        backgroundColor: "#e5e5e5",
    },
    topContainerButton: {
        backgroundColor: "#fff",
        width: '50%',
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
    },
    topContainerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },

    contentContainer: {
        backgroundColor: "#fff",
        padding: 8,
        marginTop: 5,
    },

    contentArea: {
        width: '100%',
        alignItems: "center",
        backgroundColor: "#000",
    },

    testButton: {
        margin: 2,
        padding: 3,
        borderWidth: 1,
        borderColor: "#b5b5b5",
        backgroundColor: "#f0f0f0",
    },
    testButtonText: {
        margin: 10,
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        // textAlign: 'center'
    },

});