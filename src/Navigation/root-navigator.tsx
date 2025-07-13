import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '$types/navigation';
import { StackRoutes } from './routes';
import { EColors } from '$constants/styles.constants';
import BottomNavigator from './bottom-navigator';
import { EStackScreens } from '$constants/screens.contants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'slide',
        statusBarColor: EColors.BACKGROUND_COLOR,
        statusBarStyle: 'dark',
        statusBarHidden: false,
        statusBarTranslucent: false,
        animation: 'slide_from_right'
      }}>
      <Stack.Screen name={EStackScreens.SPLASH} component={StackRoutes.Splash} />
      <Stack.Screen name={EStackScreens.BOTTOM_NAVIGATOR} component={BottomNavigator} />
      <Stack.Screen name={EStackScreens.BUY_SELL} component={StackRoutes.BuySell} />
      <Stack.Screen name={EStackScreens.COIN} component={StackRoutes.Coin} />
      <Stack.Screen name={EStackScreens.DEPOSIT_WITHDRAWAL} component={StackRoutes.DepositWithdrawal} />
      <Stack.Screen name={EStackScreens.RECEIVE_EXCHANGE} component={StackRoutes.ReceiveExchange} />
      <Stack.Screen name={EStackScreens.SEND_EXCHANGE} component={StackRoutes.SendExchange} />
      <Stack.Screen name={EStackScreens.SPIN_WHEEL} component={StackRoutes.SpinWheel} />
      <Stack.Screen name={EStackScreens.REFER_EARN} component={StackRoutes.ReferEarn} />
      <Stack.Screen name={EStackScreens.HISTORY} component={StackRoutes.History} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
