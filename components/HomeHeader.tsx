import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from './ThemedText'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Colors } from '@/constants/Colors'

export default function HomeHeader() {
    const theme = useColorScheme() ?? 'light';
    return (
        <SafeAreaView style={{ backgroundColor: Colors[theme].background }} edges={['top']}>
            <ThemedView style={styles.container}>
                <ThemedText type='title'>Hello, Alex</ThemedText>
            </ThemedView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 20
    }
})