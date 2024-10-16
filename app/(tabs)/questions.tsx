import { StyleSheet } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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
        gap: 6,
    },
});