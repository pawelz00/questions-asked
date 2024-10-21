import DarkTheme from '@/config/DarkTheme';
import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: DarkTheme.colors.border,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}