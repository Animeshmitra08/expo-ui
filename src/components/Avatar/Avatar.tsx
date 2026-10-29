import { View, Image, Text, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { useTheme } from '../../theme';
import { Size } from '../../types';

export interface AvatarProps {
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

const SIZE_MAP: Record<Size, number> = {
  sm: 32,
  md: 44,
  lg: 64,
};

export function Avatar({
  source,
  initials,
  size = 'md',
  pixelSize,
  style,
}: AvatarProps) {
  const { theme } = useTheme();
  const dimension = pixelSize ?? SIZE_MAP[size];

  const containerStyle: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  return (
    <View style={[containerStyle, style]}>
      {source ? (
        <Image
          source={source}
          style={{ width: dimension, height: dimension }}
          resizeMode="cover"
        />
      ) : (
        <Text
          style={[
            styles.initials,
            { fontSize: dimension * 0.4, color: '#FFFFFF' },
          ]}
        >
          {initials?.slice(0, 2).toUpperCase() ?? '?'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  initials: {
    fontWeight: '700',
  },
});

