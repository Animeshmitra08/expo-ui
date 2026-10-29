import * as react from 'react';
import react__default, { ReactNode } from 'react';
import { ImageSourcePropType, ViewStyle, TouchableOpacityProps, TextStyle, TextInputProps as TextInputProps$1 } from 'react-native';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

interface AvatarProps {
    /** Image source */
    source?: ImageSourcePropType;
    /** Fallback initials (displayed when no image) */
    initials?: string;
    /** Size preset */
    size?: Size;
    /** Custom pixel size (overrides size preset) */
    pixelSize?: number;
    /** Override container style */
    style?: ViewStyle;
}
declare function Avatar({ source, initials, size, pixelSize, style, }: AvatarProps): react.JSX.Element;

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
interface BadgeProps {
    /** Badge label */
    label: string;
    /** Color variant */
    variant?: BadgeVariant;
    /** Override container style */
    style?: ViewStyle;
}
declare function Badge({ label, variant, style }: BadgeProps): react.JSX.Element;

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
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
    leftIcon?: react__default.ReactNode;
    /** Right icon element */
    rightIcon?: react__default.ReactNode;
    /** Override container style */
    style?: ViewStyle;
    /** Override text style */
    textStyle?: TextStyle;
}
declare function Button({ title, variant, size, loading, disabled, leftIcon, rightIcon, style, textStyle, ...rest }: ButtonProps): react__default.JSX.Element;

interface CardProps {
    children: react__default.ReactNode;
    /** Add a subtle shadow / elevation */
    elevated?: boolean;
    /** Custom border radius */
    rounded?: boolean;
    /** Override container style */
    style?: ViewStyle;
}
declare function Card({ children, elevated, rounded, style }: CardProps): react__default.JSX.Element;

interface CheckboxProps {
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
declare function Checkbox({ checked, onToggle, label, disabled, style, }: CheckboxProps): react.JSX.Element;

interface DividerProps {
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
declare function Divider({ direction, color, thickness, spacing, style, }: DividerProps): react.JSX.Element;

interface SpinnerProps {
    /** Size preset */
    size?: Size;
    /** Optional message below the spinner */
    message?: string;
    /** Override container style */
    style?: ViewStyle;
}
declare function Spinner({ size, message, style }: SpinnerProps): react.JSX.Element;

interface SwitchProps {
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
declare function Switch({ value, onValueChange, disabled, label, style, }: SwitchProps): react.JSX.Element;

interface TextInputProps extends Omit<TextInputProps$1, 'style'> {
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
declare function TextInput({ label, helperText, error, leftAccessory, rightAccessory, containerStyle, inputStyle, labelStyle, onFocus, onBlur, editable, ...rest }: TextInputProps): react.JSX.Element;

type HeadingLevel = 1 | 2 | 3 | 4;
interface TypographyProps {
    children: React.ReactNode;
    style?: TextStyle;
}
interface HeadingProps extends TypographyProps {
    /** Heading level (1–4) */
    level?: HeadingLevel;
}
declare function Heading({ children, level, style }: HeadingProps): react.JSX.Element;
declare function Paragraph({ children, style }: TypographyProps): react.JSX.Element;
declare function Caption({ children, style }: TypographyProps): react.JSX.Element;

interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
    disabled: string;
    placeholder: string;
}
interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
interface ThemeBorderRadius {
    sm: number;
    md: number;
    lg: number;
    full: number;
}
interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    borderRadius: ThemeBorderRadius;
}

interface ThemeContextValue {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
    initialDark?: boolean;
}
declare function ThemeProvider({ children, initialTheme, initialDark }: ThemeProviderProps): react.JSX.Element;
declare function useTheme(): ThemeContextValue;

declare const lightTheme: Theme;
declare const darkTheme: Theme;
declare const defaultTheme: Theme;

export { Avatar, Badge, Button, Caption, Card, Checkbox, Divider, Heading, Paragraph, Spinner, Switch, TextInput, ThemeProvider, darkTheme, defaultTheme, lightTheme, useTheme };
export type { AvatarProps, BadgeProps, BadgeVariant, ButtonProps, CardProps, CheckboxProps, DividerProps, HeadingLevel, HeadingProps, Size, SpinnerProps, SwitchProps, TextInputProps, Theme, ThemeBorderRadius, ThemeColors, ThemeContextValue, ThemeProviderProps, ThemeSpacing, TypographyProps, Variant };
