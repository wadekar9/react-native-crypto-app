import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from '$types/navigation';
import RootNavigator from '$navigation/root-navigator';
import AppThemeProvider from '$context/app-theme.context';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <SafeAreaProvider style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>

          <FlashMessage position="top" />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AppThemeProvider>
  )
}

export default App;