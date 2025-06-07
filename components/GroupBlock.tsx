import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { mockGroups } from '@/data/mockData'
import { Group } from '@/types'
import { Colors } from '@/constants/Colors'
import { IconSymbol } from './ui/IconSymbol'

export default function GroupBlock() {
    const theme = useColorScheme() ?? 'light';

    const addGroup = [{name: "Add Group"}];

    const renderItem:ListRenderItem<Partial<Group>> = ({item, index}) => {
        if (index == 0) {
            return (
                <TouchableOpacity style={styles.addButton} onPress={() => {}}>
                    <IconSymbol size={30} name="plus" color={Colors[theme].text} />
                </TouchableOpacity>
            )
        }
        return (
            <View style={[styles.container, { backgroundColor: Colors[theme].color4 }]}>
                <ThemedText type='defaultSemiBold'>{item.name}</ThemedText>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <IconSymbol size={20} name="person.2.fill" color={Colors[theme].text} />
                    <ThemedText type='default'>{item.members?.length}</ThemedText>
                    {
                        item.admin == 'user1' ? <ThemedText type='default' style={styles.badge}>Admin</ThemedText> : null
                    }
                </View>
                <ThemedText type='medium' style={{textAlign: 'center', color: Colors[theme].tint}}>{item.balance}</ThemedText>
            </View>
        )
    }
    return (
        <ThemedView>
            <ThemedText type='subtitle'>My Groups</ThemedText>
            <View style={{marginTop: 10}}>
                <FlatList data={addGroup.concat(mockGroups)} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        borderRadius: 15,
        gap:8,
        padding: 20,
        marginRight: 10,
    },
    badge: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 1
    },
    addButton: {
        flex: 1,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderStyle: 'dashed',
        color: "#000",
        marginRight: 10,
    }
})