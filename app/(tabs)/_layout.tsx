import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function TabLayout() {

    const theme = useColorScheme();

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Jak korzystać?",
                headerTitleStyle: {
                    color: theme === 'dark' ? Colors.dark.headerText : Colors.light.headerText,
                },
                headerStyle: {
                    backgroundColor: theme === 'dark' ? Colors.dark.headerStyle : Colors.light.headerStyle,
                },
            }} />
            <Tabs.Screen name="(questions)" />
        </Tabs>
    );
}
