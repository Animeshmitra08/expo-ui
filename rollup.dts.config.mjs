import { dts } from 'rollup-plugin-dts';

export default {
  input: '.dts-tmp/index.d.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [dts()],
  external: ['react', 'react-native'],
};

