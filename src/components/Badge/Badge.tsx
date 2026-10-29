import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, ThemeColors } from '../../theme';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps {
  /** Badge label */
  label: string;
  /** Color variant */
  variant?: BadgeVariant;
  /** Override container style */
  style?: ViewStyle;
}

export function Badge({ label, variant = 'default', style }: BadgeProps) {
  const { theme } = useTheme();

  const colors = getVariantColors(variant, theme.colors);

  return (
    <View style={[styles.base, { backgroundColor: colors.bg }, style]}>
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
    </View>
  );
}

function getVariantColors(
  variant: BadgeVariant,
  colors: ThemeColors,
) {
  const map: Record<BadgeVariant, { bg: string; text: string }> = {
    default: { bg: colors.border, text: colors.text },
    success: { bg: colors.success + '20', text: colors.success },
    warning: { bg: colors.warning + '20', text: colors.warning },
    error: { bg: colors.error + '20', text: colors.error },
    info: { bg: colors.primary + '20', text: colors.primary },
  };
  return map[variant];
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 9999,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});

