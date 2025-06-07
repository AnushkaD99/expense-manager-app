import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { PieChart } from "react-native-gifted-charts";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function BalanceSummary() {
    const theme = useColorScheme() ?? 'light';
    const pieData = [
        {
            value: 34,
            color: Colors[theme].tint,
            text: "34"
        },
        {
            value: 64,
            color: Colors[theme].text,
            text: "64",
            focused: true
        }
    ]
    return (
        <ThemedView style={styles.blanceContainer}>
            <View style={{gap: 10}}>
                <ThemedText type='subtitle'>Total Balance</ThemedText>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <ThemedText type='title'>Rs. 1500.</ThemedText>
                        <ThemedText type='subtitle'>00</ThemedText>
                    </View>
                    <ThemedText type='defaultSemiBold'>You own in total</ThemedText>
                </View>
            </View>
            <PieChart
                data={pieData}
                semiCircle
                showGradient
                sectionAutoFocus
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors[theme].background}
                centerLabelComponent={() => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text
                                style={{ fontSize: 22, color: Colors[theme].text, fontWeight: 'bold' }}>
                                64%
                            </Text>
                        </View>
                    );
                }}
            />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    blanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})