import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { TabBarIcon } from '@/components/navigation/tab-bar-icon';
import DarkTheme from '@/config/DarkTheme';
import DefaultTheme from '@/config/DefaultTheme';

export default function TabLayout() {
    const theme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: theme === 'dark' ? DarkTheme.colors.primary : DefaultTheme.colors.primary,
            }}
        >
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
                tabBarStyle: {
                    backgroundColor: theme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card,
                },
                headerTitle: "Jak korzystać?",
                headerTitleStyle: {
                    fontSize: 16,
                    color: theme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text,
                },
                title: "Instrukcja",
            }} />
            <Tabs.Screen name="(questions)" options={{
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
                ),
                tabBarStyle: {
                    backgroundColor: theme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card,
                },
                title: "Pytania",
                headerShown: false,
            }} />
        </Tabs>
    );
}
