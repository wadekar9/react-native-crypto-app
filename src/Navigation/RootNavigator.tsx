import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '@utils/navigation';
import { StackNavigationRoutes } from './Routes';
import { Colors } from '@utils/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator : React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarAnimation : 'slide',
        statusBarColor : Colors.BACKGROUND_COLOR,
        statusBarStyle : 'dark',
        statusBarHidden : false,
        statusBarTranslucent : false,
        animation : 'slide_from_right'
      }}>
      <Stack.Screen name={"SplashScreen"} component={StackNavigationRoutes.SplashScreen} />
      <Stack.Screen name={"BottomNavigator"} component={StackNavigationRoutes.BottomNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
