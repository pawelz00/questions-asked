import { View, Text, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.viewContainer}>
            <Text>Main index screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})