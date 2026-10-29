import { useState } from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
  TextInputFocusEvent,
} from 'react-native';
import { useTheme } from '../../theme';

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  /** Label displayed above the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Error message — also styles the input as invalid */
  error?: string;
  /** Left accessory element */
  leftAccessory?: React.ReactNode;
  /** Right accessory element */
  rightAccessory?: React.ReactNode;
  /** Override container style */
  containerStyle?: ViewStyle;
  /** Override input style */
  inputStyle?: TextStyle;
  /** Override label style */
  labelStyle?: TextStyle;
}

export function TextInput({
  label,
  helperText,
  error,
  leftAccessory,
  rightAccessory,
  containerStyle,
  inputStyle,
  labelStyle,
  onFocus,
  onBlur,
  editable = true,
  ...rest
}: TextInputProps) {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: TextInputFocusEvent) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: TextInputFocusEvent) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const borderColor = error
    ? theme.colors.error
    : isFocused
      ? theme.colors.primary
      : theme.colors.border;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            { color: theme.colors.text },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            borderColor,
            backgroundColor: editable ? theme.colors.surface : theme.colors.disabled,
          },
        ]}
      >
        {leftAccessory && <View style={styles.accessory}>{leftAccessory}</View>}
        <RNTextInput
          placeholderTextColor={theme.colors.placeholder}
          editable={editable}
          style={[
            styles.input,
            { color: theme.colors.text },
            inputStyle,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {rightAccessory && <View style={styles.accessory}>{rightAccessory}</View>}
      </View>

      {(error || helperText) && (
        <Text
          style={[
            styles.helperText,
            { color: error ? theme.colors.error : theme.colors.textSecondary },
          ]}
        >
          {error ?? helperText}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 8,
    minHeight: 44,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  accessory: {
    paddingHorizontal: 10,
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
  },
});

