import DarkTheme from '@/config/DarkTheme';
import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: DarkTheme.colors.card,
                },
                headerTitleStyle: {
                    fontSize: 16,
                    color: DarkTheme.colors.text,
                },
                headerShown: true,
            }}>
            <Stack.Screen name="index" options={{
                title: "Wybierz kategorię"
            }} />
        </Stack>
    );
}