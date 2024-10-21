import { StyleSheet } from "react-native";
import { Collapsible } from "@/components/collapsible";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { relationshipQuestions } from "@/constants/Questions";

export default function Questions() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView style={styles.questionsContainer}>
                {relationshipQuestions.map((question, index) => (
                    <Collapsible key={index} title={`Pytanie ${index + 1}`}>
                        <ThemedText>
                            {question}
                        </ThemedText>
                    </Collapsible>
                ))}
            </ThemedView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    questionsContainer: {
        marginTop: 12,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 10,
    },
});