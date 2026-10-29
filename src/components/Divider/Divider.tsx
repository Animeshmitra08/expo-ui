import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

export interface DividerProps {
  /** Orientation */
  direction?: 'horizontal' | 'vertical';
  /** Custom color override */
  color?: string;
  /** Custom thickness */
  thickness?: number;
  /** Spacing (margin) around the divider */
  spacing?: number;
  /** Override style */
  style?: ViewStyle;
}

export function Divider({
  direction = 'horizontal',
  color,
  thickness = 1,
  spacing = 8,
  style,
}: DividerProps) {
  const { theme } = useTheme();

  const lineColor = color ?? theme.colors.border;

  if (direction === 'vertical') {
    return (
      <View
        style={[
          { width: thickness, backgroundColor: lineColor, marginHorizontal: spacing },
          styles.verticalLine,
          style,
        ]}
      />
    );
  }

  return (
    <View
      style={[
        { height: thickness, backgroundColor: lineColor, marginVertical: spacing },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  verticalLine: {
    alignSelf: 'stretch',
  },
});

