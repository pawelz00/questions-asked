import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../themed-view";
import { ThemedText } from "../themed-text";
import DarkTheme from "@/config/DarkTheme";

type CategoryProps = {
    title: string;
    color?: string;
}

export default function Category({ title, color }: CategoryProps) {

    return (
        <ThemedView darkColor={DarkTheme.colors.background} style={styles.view}>
            <ThemedText style={styles.text}>
                {title}
            </ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 64,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: DarkTheme.colors.card,
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'semibold',
    }
})