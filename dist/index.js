"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Caption: () => Caption,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Divider: () => Divider,
  Heading: () => Heading,
  Paragraph: () => Paragraph,
  Spinner: () => Spinner,
  Switch: () => Switch,
  TextInput: () => TextInput,
  ThemeProvider: () => ThemeProvider,
  darkTheme: () => darkTheme,
  defaultTheme: () => defaultTheme,
  lightTheme: () => lightTheme,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

// src/components/Avatar/Avatar.tsx
var import_react_native = require("react-native");

// src/theme/ThemeProvider.tsx
var import_react = require("react");

// src/theme/theme.ts
var lightTheme = {
  colors: {
    primary: "#3B82F6",
    secondary: "#6366F1",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    textSecondary: "#64748B",
    border: "#E2E8F0",
    error: "#EF4444",
    success: "#22C55E",
    warning: "#F59E0B",
    disabled: "#CBD5E1",
    placeholder: "#94A3B8"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999
  }
};
var darkTheme = {
  colors: {
    primary: "#60A5FA",
    secondary: "#818CF8",
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F8FAFC",
    textSecondary: "#94A3B8",
    border: "#334155",
    error: "#F87171",
    success: "#4ADE80",
    warning: "#FBBF24",
    disabled: "#475569",
    placeholder: "#64748B"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999
  }
};
var defaultTheme = lightTheme;

// src/theme/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = (0, import_react.createContext)({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {
  },
  setTheme: () => {
  }
});
function ThemeProvider({ children, initialTheme, initialDark = false }) {
  const [isDark, setIsDark] = (0, import_react.useState)(initialDark);
  const [customTheme, setCustomTheme] = (0, import_react.useState)(initialTheme);
  const theme = customTheme ?? (isDark ? darkTheme : lightTheme);
  const value = (0, import_react.useMemo)(
    () => ({
      theme,
      isDark,
      toggleTheme: () => setIsDark((prev) => !prev),
      setTheme: setCustomTheme
    }),
    [theme, isDark]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// src/components/Avatar/Avatar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var SIZE_MAP = {
  sm: 32,
  md: 44,
  lg: 64
};
function Avatar({
  source,
  initials,
  size = "md",
  pixelSize,
  style
}) {
  const { theme } = useTheme();
  const dimension = pixelSize ?? SIZE_MAP[size];
  const containerStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
    backgroundColor: theme.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native.View, { style: [containerStyle, style], children: source ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_native.Image,
    {
      source,
      style: { width: dimension, height: dimension },
      resizeMode: "cover"
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_native.Text,
    {
      style: [
        styles.initials,
        { fontSize: dimension * 0.4, color: "#FFFFFF" }
      ],
      children: initials?.slice(0, 2).toUpperCase() ?? "?"
    }
  ) });
}
var styles = import_react_native.StyleSheet.create({
  initials: {
    fontWeight: "700"
  }
});

// src/components/Badge/Badge.tsx
var import_react_native2 = require("react-native");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Badge({ label, variant = "default", style }) {
  const { theme } = useTheme();
  const colors = getVariantColors(variant, theme.colors);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native2.View, { style: [styles2.base, { backgroundColor: colors.bg }, style], children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native2.Text, { style: [styles2.text, { color: colors.text }], children: label }) });
}
function getVariantColors(variant, colors) {
  const map = {
    default: { bg: colors.border, text: colors.text },
    success: { bg: colors.success + "20", text: colors.success },
    warning: { bg: colors.warning + "20", text: colors.warning },
    error: { bg: colors.error + "20", text: colors.error },
    info: { bg: colors.primary + "20", text: colors.primary }
  };
  return map[variant];
}
var styles2 = import_react_native2.StyleSheet.create({
  base: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 9999
  },
  text: {
    fontSize: 12,
    fontWeight: "600"
  }
});

// src/components/Button/Button.tsx
var import_react_native3 = require("react-native");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Button({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  ...rest
}) {
  const { theme } = useTheme();
  const sizeStyles = getSizeStyles(size, theme.spacing);
  const variantStyles = getVariantStyles(variant, theme.colors, disabled);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react_native3.TouchableOpacity,
    {
      activeOpacity: 0.7,
      disabled: disabled || loading,
      style: [
        styles3.base,
        sizeStyles.container,
        variantStyles.container,
        disabled && styles3.disabled,
        style
      ],
      ...rest,
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react_native3.ActivityIndicator,
        {
          size: "small",
          color: variantStyles.textColor
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        leftIcon,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react_native3.Text,
          {
            style: [
              styles3.text,
              sizeStyles.text,
              { color: variantStyles.textColor },
              textStyle
            ],
            children: title
          }
        ),
        rightIcon
      ] })
    }
  );
}
function getSizeStyles(size, spacing) {
  const map = {
    sm: {
      container: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm, gap: spacing.xs },
      text: { fontSize: 13 }
    },
    md: {
      container: { paddingVertical: spacing.sm + 2, paddingHorizontal: spacing.md, gap: spacing.sm },
      text: { fontSize: 15 }
    },
    lg: {
      container: { paddingVertical: spacing.md - 2, paddingHorizontal: spacing.lg, gap: spacing.sm },
      text: { fontSize: 17 }
    }
  };
  return map[size];
}
function getVariantStyles(variant, colors, disabled) {
  if (disabled) {
    return {
      container: { backgroundColor: colors.disabled },
      textColor: "#FFFFFF"
    };
  }
  const map = {
    primary: {
      container: { backgroundColor: colors.primary },
      textColor: "#FFFFFF"
    },
    secondary: {
      container: { backgroundColor: colors.secondary },
      textColor: "#FFFFFF"
    },
    outline: {
      container: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: colors.primary
      },
      textColor: colors.primary
    },
    ghost: {
      container: { backgroundColor: "transparent" },
      textColor: colors.primary
    },
    danger: {
      container: { backgroundColor: colors.error },
      textColor: "#FFFFFF"
    }
  };
  return map[variant];
}
var styles3 = import_react_native3.StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  text: {
    fontWeight: "600"
  },
  disabled: {
    opacity: 0.6
  }
});

// src/components/Card/Card.tsx
var import_react_native4 = require("react-native");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Card({ children, elevated = false, rounded = true, style }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react_native4.View,
    {
      style: [
        styles4.base,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: rounded ? theme.borderRadius.lg : 0
        },
        elevated && styles4.elevated,
        style
      ],
      children
    }
  );
}
var styles4 = import_react_native4.StyleSheet.create({
  base: {
    borderWidth: 1,
    padding: 16
  },
  elevated: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 0
  }
});

// src/components/Checkbox/Checkbox.tsx
var import_react_native5 = require("react-native");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Checkbox({
  checked,
  onToggle,
  label,
  disabled = false,
  style
}) {
  const { theme } = useTheme();
  const boxColor = checked ? theme.colors.primary : "transparent";
  const borderColor = checked ? theme.colors.primary : theme.colors.border;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_react_native5.TouchableOpacity,
    {
      activeOpacity: 0.7,
      onPress: () => !disabled && onToggle(!checked),
      style: [styles5.container, disabled && { opacity: 0.5 }, style],
      disabled,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react_native5.View,
          {
            style: [
              styles5.box,
              {
                backgroundColor: boxColor,
                borderColor
              }
            ],
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.Text, { style: styles5.check, children: "\u2713" })
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.Text, { style: [styles5.label, { color: theme.colors.text }], children: label })
      ]
    }
  );
}
var styles5 = import_react_native5.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  check: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16
  },
  label: {
    fontSize: 15
  }
});

// src/components/Divider/Divider.tsx
var import_react_native6 = require("react-native");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Divider({
  direction = "horizontal",
  color,
  thickness = 1,
  spacing = 8,
  style
}) {
  const { theme } = useTheme();
  const lineColor = color ?? theme.colors.border;
  if (direction === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_react_native6.View,
      {
        style: [
          { width: thickness, backgroundColor: lineColor, marginHorizontal: spacing },
          styles6.verticalLine,
          style
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react_native6.View,
    {
      style: [
        { height: thickness, backgroundColor: lineColor, marginVertical: spacing },
        style
      ]
    }
  );
}
var styles6 = import_react_native6.StyleSheet.create({
  verticalLine: {
    alignSelf: "stretch"
  }
});

// src/components/Spinner/Spinner.tsx
var import_react_native7 = require("react-native");
var import_jsx_runtime8 = require("react/jsx-runtime");
var SIZE_MAP2 = {
  sm: "small",
  md: "small",
  lg: "large"
};
function Spinner({ size = "md", message, style }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_native7.View, { style: [styles7.container, style], children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native7.ActivityIndicator, { size: SIZE_MAP2[size], color: theme.colors.primary }),
    message && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native7.Text, { style: [styles7.message, { color: theme.colors.textSecondary }], children: message })
  ] });
}
var styles7 = import_react_native7.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  message: {
    fontSize: 14,
    marginTop: 10
  }
});

// src/components/Switch/Switch.tsx
var import_react2 = require("react");
var import_react_native8 = require("react-native");
var import_jsx_runtime9 = require("react/jsx-runtime");
var TRACK_WIDTH = 50;
var TRACK_HEIGHT = 28;
var THUMB_SIZE = 22;
var THUMB_MARGIN = 3;
var TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;
function Switch({
  value,
  onValueChange,
  disabled = false,
  label,
  style
}) {
  const { theme } = useTheme();
  const translateX = (0, import_react2.useRef)(new import_react_native8.Animated.Value(value ? TRAVEL : 0)).current;
  (0, import_react2.useEffect)(() => {
    import_react_native8.Animated.spring(translateX, {
      toValue: value ? TRAVEL : 0,
      useNativeDriver: true,
      bounciness: 4,
      speed: 16
    }).start();
  }, [value, translateX]);
  const trackColor = value ? theme.colors.primary : theme.colors.border;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_react_native8.TouchableOpacity,
    {
      activeOpacity: 0.7,
      onPress: () => !disabled && onValueChange(!value),
      style: [styles8.container, style],
      disabled,
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.Text, { style: [styles8.label, { color: theme.colors.text }], children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_react_native8.View,
          {
            style: [
              styles8.track,
              { backgroundColor: trackColor },
              disabled && { opacity: 0.5 }
            ],
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              import_react_native8.Animated.View,
              {
                style: [
                  styles8.thumb,
                  { transform: [{ translateX }] }
                ]
              }
            )
          }
        )
      ]
    }
  );
}
var styles8 = import_react_native8.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  label: {
    fontSize: 15,
    fontWeight: "500"
  },
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: "center",
    paddingHorizontal: THUMB_MARGIN
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2
  }
});

// src/components/TextInput/TextInput.tsx
var import_react3 = require("react");
var import_react_native9 = require("react-native");
var import_jsx_runtime10 = require("react/jsx-runtime");
function TextInput({
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
}) {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = (0, import_react3.useState)(false);
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  const borderColor = error ? theme.colors.error : isFocused ? theme.colors.primary : theme.colors.border;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react_native9.View, { style: [styles9.container, containerStyle], children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_native9.Text,
      {
        style: [
          styles9.label,
          { color: theme.colors.text },
          labelStyle
        ],
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      import_react_native9.View,
      {
        style: [
          styles9.inputContainer,
          {
            borderColor,
            backgroundColor: editable ? theme.colors.surface : theme.colors.disabled
          }
        ],
        children: [
          leftAccessory && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_native9.View, { style: styles9.accessory, children: leftAccessory }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_react_native9.TextInput,
            {
              placeholderTextColor: theme.colors.placeholder,
              editable,
              style: [
                styles9.input,
                { color: theme.colors.text },
                inputStyle
              ],
              onFocus: handleFocus,
              onBlur: handleBlur,
              ...rest
            }
          ),
          rightAccessory && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_native9.View, { style: styles9.accessory, children: rightAccessory })
        ]
      }
    ),
    (error || helperText) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_native9.Text,
      {
        style: [
          styles9.helperText,
          { color: error ? theme.colors.error : theme.colors.textSecondary }
        ],
        children: error ?? helperText
      }
    )
  ] });
}
var styles9 = import_react_native9.StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 8,
    minHeight: 44
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  accessory: {
    paddingHorizontal: 10
  },
  helperText: {
    fontSize: 12,
    marginTop: 4
  }
});

// src/components/Typography/Typography.tsx
var import_react_native10 = require("react-native");
var import_jsx_runtime11 = require("react/jsx-runtime");
var HEADING_SIZES = {
  1: 30,
  2: 24,
  3: 20,
  4: 17
};
function Heading({ children, level = 1, style }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_react_native10.Text,
    {
      style: [
        styles10.heading,
        { fontSize: HEADING_SIZES[level], color: theme.colors.text },
        style
      ],
      children
    }
  );
}
function Paragraph({ children, style }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native10.Text, { style: [styles10.paragraph, { color: theme.colors.text }, style], children });
}
function Caption({ children, style }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native10.Text, { style: [styles10.caption, { color: theme.colors.textSecondary }, style], children });
}
var styles10 = import_react_native10.StyleSheet.create({
  heading: {
    fontWeight: "700",
    marginBottom: 8
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8
  },
  caption: {
    fontSize: 12,
    lineHeight: 16
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Badge,
  Button,
  Caption,
  Card,
  Checkbox,
  Divider,
  Heading,
  Paragraph,
  Spinner,
  Switch,
  TextInput,
  ThemeProvider,
  darkTheme,
  defaultTheme,
  lightTheme,
  useTheme
});
//# sourceMappingURL=index.js.map