import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from '$utils/navigation';
import RootNavigator from '@navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App;