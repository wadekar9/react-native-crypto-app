# CryptoX - Cryptocurrency Tracker App 🚀

CryptoX is a mobile application built with React Native that allows users to track cryptocurrency prices, view detailed charts, and stay updated with market trends using the CoinGecko API. 📈

## Table of Contents
- [Features](#features) ✨
- [Tech Stack](#tech-stack) 🛠️
- [App Demo](#app-demo) 📱
- [Installation](#installation) ⚙️
- [Major Dependencies](#major-dependencies) 📦
- [Environment Variables](#environment-variables) 🔧
- [Design](#design) 🎨
- [To-Do (Optional Features)](#to-do-optional-features) ✅
- [Contributing](#contributing) 🤝
- [License](#license) 📄
- [Acknowledgements](#acknowledgements) 🙏

## Features ✨
- Real-time cryptocurrency price tracking ⏱️
- Interactive price charts with React Native Wagmi Charts 📊
- Smooth animations using React Native Reanimated 🎥
- Custom app splash screen with React Native Bootsplash 🌟
- Navigation between screens using React Navigation 🧭
- SVG icon support with React Native SVG 🖼️
- Type-safe development with TypeScript 🔍

## Tech Stack 🛠️
- **React Native**: Framework for building the mobile app 📱
- **TypeScript**: For type-safe JavaScript development 🛡️
- **React Navigation**: For navigation and routing 🧭
- **Axios**: For making API requests to CoinGecko 🌐
- **React Native Reanimated**: For smooth animations 🎞️
- **React Native Wagmi Charts**: For rendering cryptocurrency charts 📈
- **React Native Bootsplash**: For custom splash screen 🚀
- **React Native SVG**: For rendering SVG icons 🖼️

## App Demo 📱

- 🎥 **App Demo Video**:

<video src="https://github.com/user-attachments/assets/934e6f83-cc46-415d-8cf5-ebcc1ff9e270" controls width="100%" autoplay loop muted>
  Your browser does not support the video tag.
</video>


- 🖼️ **Screenshots**:

<p float="left">
  <img src="https://github.com/user-attachments/assets/d4b8de86-b065-4f24-ad15-590fb7ec165b" width="180" />
  <img src="https://github.com/user-attachments/assets/1601f874-149f-4a99-bc99-01524b80410f" width="180" />
  <img src="https://github.com/user-attachments/assets/c44549d6-4dd7-418b-b068-a9f683e005a3" width="180" />
  <img src="https://github.com/user-attachments/assets/695f97c9-cc9f-4913-9ff2-2083beca5862" width="180" />
  <img src="https://github.com/user-attachments/assets/d5e356d1-2bd7-4d7c-9f19-c2360dfcbdf4" width="180" />
</p>

## Installation ⚙️
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cryptox.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cryptox
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   Or with Yarn:
   ```bash
   yarn install
   ```
4. Set up environment variables (see [Environment Variables](#environment-variables)). 🔧
5. Run the app:
   ```bash
   npm run start
   ```
   Or with Yarn:
   ```bash
   yarn start
   ```
   For Android:
   ```bash
   npm run android
   ```
   Or with Yarn:
   ```bash
   yarn android
   ```
   For iOS:
   ```bash
   npm run ios
   ```
   Or with Yarn:
   ```bash
   yarn ios
   ```

## Major Dependencies 📦
Install the major dependencies using npm:
```bash
npm install @react-navigation/native axios react-native-reanimated react-native-wagmi-charts react-native-svg react-native-bootsplash
```

Or with Yarn:
```bash
yarn add @react-navigation/native axios react-native-reanimated react-native-wagmi-charts react-native-svg react-native-bootsplash
```

## Environment Variables 🔧
Create a `.env` file in the root directory and add the following variables:

```env
API_KEY=YOUR_COINGECKO_API_KEY
API_URL=https://api.coingecko.com/api/v3
PRO_API_URL=https://pro-api.coingecko.com/api/v3
```

- **API_KEY**: Required only when using `PRO_API_URL`. Optional for public `API_URL`. 🔑
- **API_URL**: Public CoinGecko API endpoint (no API key required). 🌐
- **PRO_API_URL**: Pro CoinGecko API endpoint (requires API key). 🔒

## Design 🎨
The app's UI is inspired by the Figma community design:  
[View Figma Design](https://www.figma.com/community/file/987218729121549341)

The app icon was generated using:  
[Icon Kitchen](https://icon.kitchen/) 🖼️

## To-Do (Optional Features) ✅
- Add dark/light theme toggle 🌙☀️
- Add portfolio tracking 💼
- Push notifications for price alerts 🔔
- Language/localization support 🌍

## Contributing 🤝
Contributions are welcome! Please follow these steps:
1. Fork the repository. 🍴
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`). ✅
4. Push to the branch (`git push origin feature/your-feature`). 🚀
5. Open a pull request. 📬

## License 📄
This project is open-source and available under the MIT License.

## Acknowledgements 🙏
- 🌐 [CoinGecko API](https://www.coingecko.com/en/api)
- 📱 [React Native](https://reactnative.dev/)
- 🎨 [Figma Community](https://www.figma.com/community)
- 📈 [Wagmi Charts](https://github.com/wagmi-dev/wagmi-charts)
