import DarkTheme from "@/config/DarkTheme"
import { router } from "expo-router"
import { forwardRef, LegacyRef, useRef } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { Gesture, GestureDetector, TouchableOpacityProps } from "react-native-gesture-handler"
import Animated, { useAnimatedStyle, useSharedValue, withClamp, withSpring, withTiming } from "react-native-reanimated"

const HomeButton = forwardRef((props: TouchableOpacityProps, ref: LegacyRef<TouchableOpacity>) => {
    return (
        <TouchableOpacity
            {...props}
            ref={ref}
            onPress={() => router.push('/(tabs)/(questions)')}
        >
            <Text style={styles.buttonText}>Przejdź do pytań  ➡️</Text>
        </TouchableOpacity>
    )
})

export const AnimatedHomeButton = Animated.createAnimatedComponent(HomeButton)

export default function HomeButtonAnimated() {
    const pressed = useSharedValue<boolean>(false);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withTiming(pressed.value ? 1.05 : 1) }],
    }))

    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });
    return <GestureDetector gesture={tap}>
        <AnimatedHomeButton style={[styles.button, animatedStyles]} />
    </GestureDetector>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: DarkTheme.colors.primary,
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: DarkTheme.colors.text,
    },
})