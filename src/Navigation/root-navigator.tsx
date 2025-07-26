import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '$types/navigation';
import { StackRoutes } from './routes';
import { EColors } from '$constants/styles.constants';
import BottomNavigator from './bottom-navigator';
import { EStackScreens } from '$constants/screens.constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
      <Stack.Screen name={EStackScreens.SPLASH} component={StackRoutes.Splash} />
      <Stack.Screen name={EStackScreens.BOTTOM_NAVIGATOR} component={BottomNavigator} />
      <Stack.Screen name={EStackScreens.TRENDING_COINS_NFTS} component={StackRoutes.TrendingCoinsNfts} />
      <Stack.Screen name={EStackScreens.CURRENCY_CONVERTER} component={StackRoutes.CurrencyConverter} />
      <Stack.Screen name={EStackScreens.SEARCH} component={StackRoutes.Search} />
      <Stack.Screen name={EStackScreens.EXCHANGES} component={StackRoutes.Exchanges} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
