import DarkTheme from '@/config/DarkTheme';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type ButtonProps = {
    onPress: () => void;
    title?: string;
    disabled?: boolean;
}

export default function Button(props: ButtonProps) {

    const { onPress, title = 'Save', disabled = false } = props;
    const pressed = useSharedValue<boolean>(false);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(pressed.value ? 1.15 : 1) }]
    }))

    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });

    return (
        <GestureDetector gesture={tap}>
            <Pressable disabled={disabled} style={styles.button} onPress={onPress}>
                <Animated.Text style={[styles.text, animatedStyles]}>{title}</Animated.Text>
            </Pressable>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: DarkTheme.colors.card,
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'semibold',
        letterSpacing: 0.25,
        color: DarkTheme.colors.text,
    },
});
