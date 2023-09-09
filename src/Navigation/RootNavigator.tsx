import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '@utils/navigation';
import { StackNavigationRoutes } from './Routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator : React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={"SplashScreen"} component={StackNavigationRoutes.SplashScreen} />
      <Stack.Screen name={"BottomNavigator"} component={StackNavigationRoutes.BottomNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
