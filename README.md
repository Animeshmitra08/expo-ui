# rn-ui-kit

A typed, themeable React Native UI component library.

## Installation

```bash
npm install rn-ui-kit
```

### Peer Dependencies

```bash
npm install react react-native
```

## Quick Start

Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider, Button, TextInput, Card } from 'rn-ui-kit';

export default function App() {
  return (
    <ThemeProvider>
      <Card elevated>
        <TextInput label="Email" placeholder="you@example.com" />
        <Button title="Sign In" variant="primary" />
      </Card>
    </ThemeProvider>
  );
}
```

## Components

| Component    | Description                                   |
| ------------ | --------------------------------------------- |
| `Button`     | Pressable button with variants, sizes, icons  |
| `TextInput`  | Styled text input with label, error, helpers  |
| `Card`       | Container with border / elevation             |
| `Avatar`     | Circular image or initials                    |
| `Badge`      | Small status label chip                       |
| `Divider`    | Horizontal or vertical separator              |
| `Switch`     | Animated toggle switch                        |
| `Checkbox`   | Checkable box with label                      |
| `Heading`    | Heading text (levels 1–4)                     |
| `Paragraph`  | Body text                                     |
| `Caption`    | Secondary small text                          |
| `Spinner`    | Loading indicator with optional message       |

## Theming

Built-in `lightTheme` and `darkTheme` are provided. You can also pass a custom `Theme` object:

```tsx
import { ThemeProvider, lightTheme } from 'rn-ui-kit';

const myTheme = {
  ...lightTheme,
  colors: { ...lightTheme.colors, primary: '#E11D48' },
};

<ThemeProvider initialTheme={myTheme}>
  {/* ... */}
</ThemeProvider>
```

Use the `useTheme()` hook inside any component to access the current theme:

```tsx
import { useTheme } from 'rn-ui-kit';

function MyComponent() {
  const { theme, isDark, toggleTheme } = useTheme();
  // ...
}
```

## Building

```bash
npm run build       # Builds CJS + ESM + type declarations
npm run dev         # Watch mode
npm run typecheck   # Run tsc --noEmit
```

## License

MIT

