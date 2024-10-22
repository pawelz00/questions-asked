import DarkTheme from "@/config/DarkTheme"
import DefaultTheme from "@/config/DefaultTheme"
import { router } from "expo-router"
import { forwardRef, LegacyRef } from "react"
import { TouchableOpacity, StyleSheet, Text, useColorScheme } from "react-native"
import { Gesture, GestureDetector, TouchableOpacityProps } from "react-native-gesture-handler"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { ThemedText } from "../themed-text"

const HomeButton = forwardRef((props: TouchableOpacityProps, ref: LegacyRef<TouchableOpacity>) => {
    return (
        <TouchableOpacity
            {...props}
            ref={ref}
            onPress={() => router.push('/(tabs)/(questions)')}
        >
            <ThemedText style={styles.buttonText}>Przejdź do pytań  ➡️</ThemedText>
        </TouchableOpacity>
    )
})

export const AnimatedHomeButton = Animated.createAnimatedComponent(HomeButton)

export default function HomeButtonAnimated() {
    const theme = useColorScheme();
    const pressed = useSharedValue<boolean>(false);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withTiming(pressed.value ? 1.1 : 1) }],
    }))

    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });

    return <GestureDetector gesture={tap}>
        <AnimatedHomeButton style={[styles.button, { backgroundColor: theme === 'dark' ? DarkTheme.colors.primary : DefaultTheme.colors.primary }, animatedStyles]} />
    </GestureDetector>
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})