import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Category from "@/components/questions/category";
import { categories } from "@/constants/Questions";

export default function Index() {

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Category title={category.title} color={category.color} key={category.title + index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    padding: 24,
  },
});