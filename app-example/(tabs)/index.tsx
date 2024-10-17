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
      headerImage={<Image source={require('../../assets/images/heart-shape.png')} style={styles.logo} />}
    >
      <ThemedView style={styles.flexContainer}>
        <ThemedText type='title'>
          Pytania miłosne dla par!
        </ThemedText>
        <Ionicons name='heart-sharp' size={32} style={{ color: 'red' }} />
      </ThemedView>
      <ThemedView>
        <ThemedText type='subtitle'>
          Zadaj 100 pytań swojej drugiej połówce i poznaj ją jeszcze lepiej!
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>
          Przejdź do zakładki "Pytania" i wybierz pytania, które chcesz zadać swojej drugiej połówce.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={{ color: "red" }}>
          Powodzenia!
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
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
  }
});
