module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@mock': './src/mock',
          '@redux': './src/redux'
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
