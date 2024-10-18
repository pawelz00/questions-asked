import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import DarkTheme from '@/config/DarkTheme';

export default function TabLayout() {

    const theme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors[theme ?? 'light'].headerText,
            }}
        >
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
                tabBarStyle: {
                    backgroundColor: theme === 'dark' ? DarkTheme.colors.card : Colors.light.headerStyle,
                },
                title: "Instrukcja",
            }} />
            <Tabs.Screen name="(questions)" options={{
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
                ),
                tabBarStyle: {
                    backgroundColor: theme === 'dark' ? DarkTheme.colors.card : Colors.light.headerStyle,
                },
                title: "Pytania",
            }} />
        </Tabs>
    );
}
