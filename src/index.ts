// ─── Components ──────────────────────────────────────────────────────────────
export {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Spinner,
  Switch,
  TextInput,
  Heading,
  Paragraph,
  Caption,
} from './components';

export type {
  AvatarProps,
  BadgeProps,
  BadgeVariant,
  ButtonProps,
  CardProps,
  CheckboxProps,
  DividerProps,
  SpinnerProps,
  SwitchProps,
  TextInputProps,
  HeadingProps,
  TypographyProps,
  HeadingLevel,
} from './components';

// ─── Theme ───────────────────────────────────────────────────────────────────
export {
  ThemeProvider,
  useTheme,
  lightTheme,
  darkTheme,
  defaultTheme,
} from './theme';

export type {
  Theme,
  ThemeColors,
  ThemeSpacing,
  ThemeBorderRadius,
  ThemeProviderProps,
  ThemeContextValue,
} from './theme';

// ─── Common Types ────────────────────────────────────────────────────────────
export type {
  Size,
  Variant,
} from './types';
