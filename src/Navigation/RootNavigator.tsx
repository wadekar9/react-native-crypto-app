import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '$utils/navigation';
import { StackRoutes } from './Routes';
import { Colors } from '$utils/theme';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'slide',
        statusBarColor: Colors.BACKGROUND_COLOR,
        statusBarStyle: 'dark',
        statusBarHidden: false,
        statusBarTranslucent: false,
        animation: 'slide_from_right'
      }}>
      <Stack.Screen name={"SplashScreen"} component={StackRoutes.Splash} />
      <Stack.Screen name={"BottomNavigator"} component={BottomNavigator} />
      <Stack.Screen name={"BuySellScreen"} component={StackRoutes.BuySell} />
      <Stack.Screen name={"CoinScreen"} component={StackRoutes.Coin} />
      <Stack.Screen name={"DepositWithdrawalScreen"} component={StackRoutes.DepositWithdrawal} />
      <Stack.Screen name={"ReceiveExchangeScreen"} component={StackRoutes.ReceiveExchange} />
      <Stack.Screen name={"SendExchangeScreen"} component={StackRoutes.SendExchange} />
      <Stack.Screen name={"SpinWheelScreen"} component={StackRoutes.SpinWheel} />
      <Stack.Screen name={"ReferEarnScreen"} component={StackRoutes.ReferEarn} />
      <Stack.Screen name={"HistoryScreen"} component={StackRoutes.History} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
