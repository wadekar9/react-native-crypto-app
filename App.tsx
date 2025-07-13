import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from '$types/navigation';
import RootNavigator from '$navigation/root-navigator';
import AppThemeProvider from '$context/app-theme.context';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
          ref={navigationRef}
        >
          <RootNavigator />
        </NavigationContainer>

        <FlashMessage position="top" />
      </GestureHandlerRootView>
    </AppThemeProvider>
  )
}

export default App;