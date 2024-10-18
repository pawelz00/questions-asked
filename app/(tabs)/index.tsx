import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DarkTheme from "@/config/DarkTheme";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (

        <SafeAreaView style={styles.viewContainer}>
            <ThemedView darkColor={DarkTheme.colors.background}>
                <ThemedText type='title' style={{
                    color: DarkTheme.colors.text,
                    shadowColor: DarkTheme.colors.card,
                    borderColor: DarkTheme.colors.border,
                    ...styles.headerContainer,
                }}>
                    Pytania miłosne dla par!
                </ThemedText>
            </ThemedView>
            <ThemedView darkColor={DarkTheme.colors.background} style={styles.mainContainer}>
                <ThemedText>
                    • Wybierz jedną z 4 kategorii.
                </ThemedText>
                <ThemedText>
                    • Zadaj pytanie swojej drugiej połówce, aby lepiej się poznać!
                </ThemedText>
                <ThemedText>
                    • Odpowiadaj szczerze na pytania, które dostaniesz.
                </ThemedText>
                <ThemedText>
                    • A może chcesz zadać pytanie samemu sobie?
                </ThemedText>
            </ThemedView>
            <ThemedView darkColor={DarkTheme.colors.background}>
                <ThemedText type='subtitle' style={{
                    color: DarkTheme.colors.text,
                }}>
                    Powodzenia! ❤️‍🔥
                </ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        gap: 24,
        padding: 24
    },
    headerContainer: {
        fontWeight: 'semibold',
        shadowOpacity: 0.8,
        textAlign: 'center',
        borderWidth: 4,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    mainContainer: {
        gap: 6,
    }
})