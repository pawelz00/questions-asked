import { View, StyleSheet } from "react-native";
import Category from "@/components/questions/category";
import { categories, questions } from "@/constants/Questions";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import DarkTheme from "@/config/DarkTheme";
import { Link } from "expo-router";

export default function Index() {

  const questionsLength = questions.length;

  return (
    // Todo: Add number of completed questions 
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'semibold' }}>
        W bazie posiadamy {questionsLength} {questionsLength === 1 ? 'pytanie' : questionsLength < 5 ? 'pytania' : 'pytań'}!
      </ThemedText>
      <ThemedView style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <ThemedView key={category.title + index} style={{ backgroundColor: 'transparent' }}>
            <Link
              href={{
                pathname: '/(tabs)/(questions)/single/[category]',
                params: { category: category.title }
              }}>
              <Category title={category.title} color={category.color} />
            </Link>
          </ThemedView>
        ))}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: 'transparent',
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