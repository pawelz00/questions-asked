import DarkTheme from '@/config/DarkTheme';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

type ButtonProps = {
    onPress: () => void;
    title?: string;
    disabled?: boolean;
}

export default function Button(props: ButtonProps) {
    const { onPress, title = 'Save', disabled = false } = props;
    return (
        <Pressable disabled={disabled} style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
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
