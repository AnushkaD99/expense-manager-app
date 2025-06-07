import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeHeader from '@/components/HomeHeader';

export default function HomeLayout() {
    const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerShadowVisible: false,
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen name="index" options={{ header: () => <HomeHeader /> }} />
      {/* <Stack.Screen
        name="expense-detail"
        options={{ title: 'Expense Details', presentation: 'modal' }}
      /> */}
    </Stack>
  );
}