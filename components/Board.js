import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';


export default function Board({content}) {
    // console.disableYellowBox = true;

    return (
        <TouchableOpacity style={styles.oneBoard} >
            <Text style={styles.boardTitle} numberOfLines={2}>{content.title}</Text>
            <Text style={styles.boardSub} numberOfLines={4}>{content.sub}</Text>
        </TouchableOpacity>
    );

    // return i % 2 == 0 ? (
    //     <TouchableOpacity style={styles.oneBoard} key={i}>
    //         <Text style={styles.boardTitle} numberOfLines={2}>{content.title}</Text>
    //         <Text style={styles.boardSub} numberOfLines={4}>{content.sub}</Text>
    //     </TouchableOpacity>
    // ) : (
    //     <TouchableOpacity style={styles.oneBoard02} key={i}>
    //         <Text style={styles.boardTitle} numberOfLines={2}>{content.title}</Text>
    //         <Text style={styles.boardSub} numberOfLines={4}>{content.sub}</Text>
    //     </TouchableOpacity>
    // )

}


const styles = StyleSheet.create({
    oneBoard: {
        margin: 5,
        width: 220,
        borderRadius: 10,
        backgroundColor: "#e5e5e5",
        padding: 20,
        margin: 6
    },
    oneBoard02: {
        margin: 5,
        width: 220,
        borderRadius: 10,
        backgroundColor: "#ffd6aa",
        padding: 20,
        margin: 6
    },
    boardText: {
        marginLeft: 5,
    },
    boardTitle: {
        margin: 5,
        fontSize: 20,
        fontWeight: "700"
    },
    boardSub: {
        margin: 4,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 15
    }
});