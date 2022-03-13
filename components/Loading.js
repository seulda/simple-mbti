import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Loading() {
    return (

        <View style={styles.loadingBackground}>
            <View style={styles.loadingContainer}>
                <Text style={styles.lodingTitle}> ~~ 로딩중 ~~ </Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    loadingBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdada',
    },
    loadingContainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        borderRadius: 15
    },
    lodingTitle: {
        margin: 20,
        padding: 20,
        width: 200,
        fontSize: 25,
        fontWeight: '700',
        textAlign: "center",
    }

})