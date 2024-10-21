import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import DarkTheme from "@/config/DarkTheme";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (

        <SafeAreaView style={styles.viewContainer}>
            <ThemedView darkColor={DarkTheme.colors.background}>
                <ThemedText>
                    Home
                </ThemedText>
            </ThemedView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        gap: 12,
        paddingHorizontal: 18,
        paddingVertical: 6,
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