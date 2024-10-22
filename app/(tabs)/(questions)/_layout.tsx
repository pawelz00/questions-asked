import DarkTheme from '@/config/DarkTheme';
import DefaultTheme from '@/config/DefaultTheme';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function HomeLayout() {
    const theme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card,
                },
                headerTitleStyle: {
                    fontSize: 16,
                    color: theme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text,
                },
                headerShown: true,
            }}>
            <Stack.Screen name="index" options={{
                title: "Wybierz kategorię"
            }} />
        </Stack>
    );
}