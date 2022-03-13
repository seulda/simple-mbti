import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetailOne({content}) {
    // console.disableYellowBox = true;

    return (
        <TouchableOpacity style={styles.oneBoard} >
            <Text style={styles.boardTitle} numberOfLines={1}>{content.name}</Text>
            <Text style={styles.boardSub} numberOfLines={1}>{content.mbti}</Text>
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
        margin: 2,
        padding: 3,
        borderWidth: 1,
        borderColor: "#b5b5b5",
        backgroundColor: "#f0f0f0",
    },
    oneBoard02: {
        margin: 2,
        padding: 3,
        borderWidth: 1,
        borderColor: "#b5b5b5",
        backgroundColor: "#ffd6aa",
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
        fontSize: 15
    }
});