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
      <Stack.Screen name={"BuySellScreen"} component={StackNavigationRoutes.BuySellScreen} />
      <Stack.Screen name={"CoinScreen"} component={StackNavigationRoutes.CoinScreen} />
      <Stack.Screen name={"DepositWithdrawalScreen"} component={StackNavigationRoutes.DepositWithdrawalScreen} />
      <Stack.Screen name={"ReceiveExchangeScreen"} component={StackNavigationRoutes.ReceiveExchangeScreen} />
      <Stack.Screen name={"SendExchangeScreen"} component={StackNavigationRoutes.SendExchangeScreen} />
      <Stack.Screen name={"SpinWheelScreen"} component={StackNavigationRoutes.SpinWheelScreen} />
      <Stack.Screen name={"ReferEarnScreen"} component={StackNavigationRoutes.ReferEarnScreen} />
      <Stack.Screen name={"HistoryScreen"} component={StackNavigationRoutes.HistoryScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
