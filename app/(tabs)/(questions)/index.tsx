import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Category from "@/components/questions/category";

export default function Index() {

  const categories = [
    "Przyszłość",
    "Erotyczne",
    "Emocje",
    "Zdrowie",
  ]

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Category title={category} key={category + index} />
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