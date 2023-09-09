import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './RootNavigator';
import { navigationRef } from '@utils/navigation';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <RootNavigator/>
    </NavigationContainer>
  )
}

export default Navigation;