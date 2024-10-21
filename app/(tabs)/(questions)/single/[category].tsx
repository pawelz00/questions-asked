import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { categories, Question, questions } from '@/constants/Questions';
import DarkTheme from '@/config/DarkTheme';
import { useEffect, useState } from 'react';

export default function DetailsScreen() {
    const { category } = useLocalSearchParams();
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const questionsArray = questions.filter((question) => question.category === category);

    useEffect(() => {
        setCurrentQuestion(questionsArray?.[0]);
    }, [category])

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: String(category),
                    headerBackTitle: 'Wróć',
                    headerStyle: {
                        backgroundColor: categories.find((cat) => cat.title === category)?.color,
                    }
                }}
            />
            <ThemedView style={styles.questionContainer}>
                <ThemedText>
                    {currentQuestion?.question}
                </ThemedText>
            </ThemedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    questionContainer: {
        width: '100%',
        height: '90%',
        backgroundColor: DarkTheme.colors.card,
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {

    },
});