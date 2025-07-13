module.exports = {
  presets: ['module:$react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          '$components': './src/components',
          '$assets': './src/assets',
          '$utils': './src/utils',
          '$navigation': './src/navigation',
          '$hooks': './src/hooks',
          '$mock': './src/mock',
          '$types': './src/types'
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
