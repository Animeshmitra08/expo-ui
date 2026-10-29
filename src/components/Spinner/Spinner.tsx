import { View, ActivityIndicator, StyleSheet, ViewStyle, Text } from 'react-native';
import { useTheme } from '../../theme';
import { Size } from '../../types';

export interface SpinnerProps {
  /** Size preset */
  size?: Size;
  /** Optional message below the spinner */
  message?: string;
  /** Override container style */
  style?: ViewStyle;
}

const SIZE_MAP: Record<Size, 'small' | 'large'> = {
  sm: 'small',
  md: 'small',
  lg: 'large',
};

export function Spinner({ size = 'md', message, style }: SpinnerProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={SIZE_MAP[size]} color={theme.colors.primary} />
      {message && (
        <Text style={[styles.message, { color: theme.colors.textSecondary }]}>
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  message: {
    fontSize: 14,
    marginTop: 10,
  },
});

