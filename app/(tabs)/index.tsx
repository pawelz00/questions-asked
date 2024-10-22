import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeButtonAnimated from "@/components/animation/home-button";

export default function Index() {

    return (
        <SafeAreaView style={styles.viewContainer}>
            <ThemedText style={styles.title}>Witaj w QuestionsAsked!</ThemedText>
            <ThemedText style={styles.subtitle}>
                👋 Znajdziesz tutaj ciekawe pytania, które pomogą wzmocnić Twoją relację.
                Sprawdź, ile wiecie o sobie nawzajem i zobaczcie, jak możecie się lepiej zrozumieć!
            </ThemedText>
            <ThemedText style={styles.introduction}>
                🚀 Przed wami wyjątkowa przygoda!
                Nasza aplikacja dostarcza wiele pytań na różne tematy – od zabawnych po poważne.
                Odpowiadajcie razem na pytania i odkrywajcie nowe rzeczy o sobie!
            </ThemedText>
            <HomeButtonAnimated />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 18,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 0.5,
        lineHeight: 35,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
    },
    introduction: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    emojis: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 40,
    },
})