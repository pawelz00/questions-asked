import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <ThemedView style={styles.flexContainer}>
        <ThemedText type='title'>
          Pytania miłosne dla par!
        </ThemedText>
        <Ionicons name='heart-sharp' size={32} style={{ color: 'red' }} />
      </ThemedView>
      <ThemedView style={styles.flexContainer}>
        <ThemedText type='default'>
          Zadaj 100 pytań swojej drugiej połówce i poznaj ją jeszcze lepiej!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.flexContainer}>
        <ThemedText>
          Przejdź do zakładki "Pytania" i wybierz pytania, które chcesz zadać swojej drugiej połówce.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView >
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
