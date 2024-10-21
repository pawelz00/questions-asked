import { View, StyleSheet } from "react-native";
import Category from "@/components/questions/category";
import { categories, questions } from "@/constants/Questions";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import DarkTheme from "@/config/DarkTheme";

export default function Index() {

  const questionsLength = questions.length;

  return (
    // Todo: Add number of completed questions 
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'semibold' }}>
        W bazie posiadamy {questionsLength} {questionsLength === 1 ? 'pytanie' : questionsLength < 5 ? 'pytania' : 'pytań'}!
      </ThemedText>
      <ThemedView darkColor={DarkTheme.colors.background} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Category title={category.title} color={category.color} key={category.title + index} />
        ))}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  container: {
    flex: 1,
    gap: 24,
    padding: 24,
  },
});