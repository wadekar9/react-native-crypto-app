module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          '$assets': './src/assets',
          '$components': './src/components',
          '$constants': './src/constants',
          '$context': './src/context',
          '$hooks': './src/hooks',
          '$navigation': './src/navigation',
          '$screens': './src/screens',
          '$types': './src/types',
          '$utils': './src/utils'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
