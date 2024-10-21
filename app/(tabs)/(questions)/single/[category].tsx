import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { categories, Question, questions } from '@/constants/Questions';
import DarkTheme from '@/config/DarkTheme';
import { useEffect, useState } from 'react';
import Button from '@/components/pressable';

export default function DetailsScreen() {
    const { category } = useLocalSearchParams();
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const questionsArray = questions.filter((question) => question.category === category);

    useEffect(() => {
        setCurrentQuestion(questionsArray?.[0]);
    }, [category])

    function previousDisabled() {
        return questionsArray?.indexOf(currentQuestion ?? questionsArray?.[0]) === 0;
    }

    function nextDisabled() {
        return questionsArray?.indexOf(currentQuestion ?? questionsArray?.[0]) === questionsArray.length - 1;
    }

    const currentQuestionIndex = questionsArray.indexOf(currentQuestion ?? questionsArray[0]);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: String(category),
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: categories.find((cat) => cat.title === category)?.color,
                    }
                }}
            />
            <ThemedView style={styles.questionContainer}>
                <ThemedText style={styles.absolute}>
                    {currentQuestionIndex + 1} / {questionsArray.length}
                </ThemedText>
                <ThemedText>
                    {currentQuestion?.question}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.buttonContainer}>
                <Button disabled={previousDisabled()} onPress={() => {
                    const currentIndex = questionsArray.indexOf(currentQuestion ?? questionsArray[0]);
                    const nextIndex = currentIndex - 1;
                    setCurrentQuestion(questionsArray[nextIndex]);
                }} title='Poprzednie' />
                <Button disabled={nextDisabled()} onPress={() => {
                    const currentIndex = questionsArray.indexOf(currentQuestion ?? questionsArray[0]);
                    const nextIndex = currentIndex + 1;
                    setCurrentQuestion(questionsArray[nextIndex]);
                }} title='Następne' />
            </ThemedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
    absolute: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'transparent',
    },
});