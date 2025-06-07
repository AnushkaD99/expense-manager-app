import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'


export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <ThemedView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hello, Alex</Text>
          <Text style={styles.dateText}>August 2025</Text>
        </View>
      </ThemedView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 14,
    marginTop: 4,
  },
});
