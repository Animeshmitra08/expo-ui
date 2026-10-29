import { Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '../../theme';

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface TypographyProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export interface HeadingProps extends TypographyProps {
  /** Heading level (1–4) */
  level?: HeadingLevel;
}

const HEADING_SIZES: Record<HeadingLevel, number> = {
  1: 30,
  2: 24,
  3: 20,
  4: 17,
};

export function Heading({ children, level = 1, style }: HeadingProps) {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        styles.heading,
        { fontSize: HEADING_SIZES[level], color: theme.colors.text },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Paragraph({ children, style }: TypographyProps) {
  const { theme } = useTheme();

  return (
    <Text style={[styles.paragraph, { color: theme.colors.text }, style]}>
      {children}
    </Text>
  );
}

export function Caption({ children, style }: TypographyProps) {
  const { theme } = useTheme();

  return (
    <Text style={[styles.caption, { color: theme.colors.textSecondary }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
});

