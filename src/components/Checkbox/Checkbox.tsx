import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked: boolean;
  /** Called when the value changes */
  onToggle: (checked: boolean) => void;
  /** Label displayed beside the checkbox */
  label?: string;
  /** Disable interaction */
  disabled?: boolean;
  /** Override container style */
  style?: ViewStyle;
}

export function Checkbox({
  checked,
  onToggle,
  label,
  disabled = false,
  style,
}: CheckboxProps) {
  const { theme } = useTheme();

  const boxColor = checked ? theme.colors.primary : 'transparent';
  const borderColor = checked ? theme.colors.primary : theme.colors.border;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => !disabled && onToggle(!checked)}
      style={[styles.container, disabled && { opacity: 0.5 }, style]}
      disabled={disabled}
    >
      <View
        style={[
          styles.box,
          {
            backgroundColor: boxColor,
            borderColor,
          },
        ]}
      >
        {checked && <Text style={styles.check}>✓</Text>}
      </View>
      {label && (
        <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },
  label: {
    fontSize: 15,
  },
});

