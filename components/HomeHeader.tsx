import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from './ThemedText'

export default function HomeHeader() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                <ThemedText type='title'>Hello, Alex</ThemedText>
            </ThemedView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        // flex: 1,
    },
    container: {
        padding: 32,

    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
    },
    dateText: {
        fontSize: 14,
        marginTop: 4,
    },
})