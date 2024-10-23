import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../themed-view";
import { ThemedText } from "../themed-text";
import DarkTheme from "@/config/DarkTheme";
import { CategoryProps, questions } from "@/constants/Questions";

export default function Category({ categoryName, color, label }: CategoryProps) {

    return (
        <ThemedView style={{
            ...styles.view,
            backgroundColor: color ?? DarkTheme.colors.card,
            borderColor: color ?? DarkTheme.colors.card,
        }}>
            <ThemedText style={styles.text}>
                {label}
            </ThemedText>
            <ThemedText style={styles.numberOfQuestions}>
                {questions.filter((question) => question.category === categoryName)?.length}
            </ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 64,
        borderWidth: 2,
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        paddingHorizontal: 32,
    },
    text: {
        fontSize: 24,
        fontWeight: 'semibold',
    },
    numberOfQuestions: {
        fontSize: 16,
        fontWeight: 'light',
    }
})