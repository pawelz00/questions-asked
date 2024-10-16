import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


export default function Questions() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView>
                <ThemedText>
                    Testowa aplikacja mobilna zbudowana w React Native z użyciem Expo.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    )
}