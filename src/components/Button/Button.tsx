import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme, ThemeColors, ThemeSpacing } from '../../theme';
import { Size, Variant } from '../../types';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  /** Button label text */
  title: string;
  /** Visual variant */
  variant?: Variant;
  /** Size preset */
  size?: Size;
  /** Show a loading spinner and disable the button */
  loading?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Override container style */
  style?: ViewStyle;
  /** Override text style */
  textStyle?: TextStyle;
}

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const sizeStyles = getSizeStyles(size, theme.spacing);
  const variantStyles = getVariantStyles(variant, theme.colors, disabled);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[
        styles.base,
        sizeStyles.container,
        variantStyles.container,
        disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variantStyles.textColor}
        />
      ) : (
        <>
          {leftIcon}
          <Text
            style={[
              styles.text,
              sizeStyles.text,
              { color: variantStyles.textColor },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
}

function getSizeStyles(size: Size, spacing: ThemeSpacing) {
  const map: Record<Size, { container: ViewStyle; text: TextStyle }> = {
    sm: {
      container: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm, gap: spacing.xs },
      text: { fontSize: 13 },
    },
    md: {
      container: { paddingVertical: spacing.sm + 2, paddingHorizontal: spacing.md, gap: spacing.sm },
      text: { fontSize: 15 },
    },
    lg: {
      container: { paddingVertical: spacing.md - 2, paddingHorizontal: spacing.lg, gap: spacing.sm },
      text: { fontSize: 17 },
    },
  };
  return map[size];
}

function getVariantStyles(
  variant: Variant,
  colors: ThemeColors,
  disabled: boolean,
) {
  if (disabled) {
    return {
      container: { backgroundColor: colors.disabled } as ViewStyle,
      textColor: '#FFFFFF',
    };
  }

  const map: Record<Variant, { container: ViewStyle; textColor: string }> = {
    primary: {
      container: { backgroundColor: colors.primary },
      textColor: '#FFFFFF',
    },
    secondary: {
      container: { backgroundColor: colors.secondary },
      textColor: '#FFFFFF',
    },
    outline: {
      container: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: colors.primary,
      },
      textColor: colors.primary,
    },
    ghost: {
      container: { backgroundColor: 'transparent' },
      textColor: colors.primary,
    },
    danger: {
      container: { backgroundColor: colors.error },
      textColor: '#FFFFFF',
    },
  };
  return map[variant];
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.6,
  },
});

