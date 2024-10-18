import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function TabLayout() {

    const theme = useColorScheme();

    console.log(theme);

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Instrukcja",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
            }} />
            <Tabs.Screen name="(questions)" />
        </Tabs>
    );
}
