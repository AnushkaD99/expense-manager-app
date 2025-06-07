import BalanceSummary from '@/components/BalanceSummary';
import GroupBlock from '@/components/GroupBlock';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'


export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <BalanceSummary />
      <GroupBlock />
      {/* <View style={{height: 500, backgroundColor: "#000"}}></View> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({});
