import { FlatList, ListRenderItem, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { mockExpenses } from '@/data/mockData'
import { Expense } from '@/types'
import { IconSymbol } from './ui/IconSymbol'
import { Colors } from '@/constants/Colors'

export default function RecentExpenses() {
    const theme = useColorScheme() ?? 'light';
    
    return (
        <ThemedView style={{gap: 20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <ThemedText type='subtitle'>My Groups</ThemedText>
                <ThemedText type='link'>See All</ThemedText>
            </View>
            <View>
                {mockExpenses.slice(0, 10).map((item, index) => (
                    <View
                        key={index}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                            <View style={styles.icon}>
                                <IconSymbol size={20} name="person.2.fill" color={Colors[theme].icon} />
                            </View>
                            <View>
                                <ThemedText type='medium'>{item.description}</ThemedText>
                                <ThemedText type='default'>
                                    {item.date ? new Date(item.date).toLocaleDateString('en-CA') : null}
                                </ThemedText>
                            </View>
                        </View>
                        <ThemedText type='subtitle'>
                            {item.amount ? Number(item.amount).toFixed(2) : '0.00'}
                        </ThemedText>
                    </View>
                ))}
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    icon: {
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 15,
    }
})