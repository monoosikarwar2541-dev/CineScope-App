module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@config': './config',
          '@/config': './config',
          'config': './config',
          '@types': './src/types',
          '@constants': './src/constants',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};