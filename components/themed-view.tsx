import DefaultTheme from '@/config/DefaultTheme';
import { DarkTheme } from '@react-navigation/native';
import { useColorScheme, View, type ViewProps } from 'react-native';
export type ThemedViewProps = ViewProps

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const theme = useColorScheme();
  const backgroundColor = theme === 'dark' ? DarkTheme.colors.background : DefaultTheme.colors.background;
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
