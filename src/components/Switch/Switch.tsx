import { useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { useTheme } from '../../theme';

export interface SwitchProps {
  /** Whether the switch is on */
  value: boolean;
  /** Called when the value changes */
  onValueChange: (value: boolean) => void;
  /** Disable interaction */
  disabled?: boolean;
  /** Label displayed beside the switch */
  label?: string;
  /** Override container style */
  style?: ViewStyle;
}

const TRACK_WIDTH = 50;
const TRACK_HEIGHT = 28;
const THUMB_SIZE = 22;
const THUMB_MARGIN = 3;
const TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export function Switch({
  value,
  onValueChange,
  disabled = false,
  label,
  style,
}: SwitchProps) {
  const { theme } = useTheme();
  const translateX = useRef(new Animated.Value(value ? TRAVEL : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? TRAVEL : 0,
      useNativeDriver: true,
      bounciness: 4,
      speed: 16,
    }).start();
  }, [value, translateX]);

  const trackColor = value
    ? theme.colors.primary
    : theme.colors.border;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => !disabled && onValueChange(!value)}
      style={[styles.container, style]}
      disabled={disabled}
    >
      {label && (
        <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
      )}
      <View
        style={[
          styles.track,
          { backgroundColor: trackColor },
          disabled && { opacity: 0.5 },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            { transform: [{ translateX }] },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
  },
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
    paddingHorizontal: THUMB_MARGIN,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
});

