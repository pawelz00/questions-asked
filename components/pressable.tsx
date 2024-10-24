import DarkTheme from '@/config/DarkTheme';
import DefaultTheme from '@/config/DefaultTheme';
import React from 'react';
import { StyleSheet, Pressable, useColorScheme } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type ButtonProps = {
    onPress: () => void;
    title?: string;
    disabled?: boolean;
}

export default function Button(props: ButtonProps) {
    const theme = useColorScheme();
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
            <Pressable disabled={disabled} style={[styles.button, {
                backgroundColor: theme === 'dark' ? DarkTheme.colors.border : DefaultTheme.colors.border,
            }]} onPress={onPress}>
                <Animated.Text style={[styles.text, {
                    color: theme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text
                }, animatedStyles]}>{title}</Animated.Text>
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
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'semibold',
        letterSpacing: 0.25,
    },
});
