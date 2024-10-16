import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useColorScheme() ?? 'light';

  function getTouchableStyles() {
    const style = StyleSheet.create({
      basic: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: theme === 'light' ? Colors.light.border : Colors.dark.border,
      }
    })


    if (isOpen) {
      style.basic = {
        ...style.basic,
        borderColor: theme === 'light' ? Colors.light.borderPressed : Colors.dark.borderPressed,
        // @ts-ignore
        borderStyle: 'dashed',
      }
    }

    return style.basic
  }

  return (
    <ThemedView style={getTouchableStyles()}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((prev: boolean) => !prev)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold" style={{ fontSize: 18 }}>{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  basic: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginVertical: 6,
    marginLeft: 24,
  },
});
