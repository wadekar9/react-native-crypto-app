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
        statusBarAnimation: 'slide',
        statusBarColor: EColors.BACKGROUND_COLOR,
        statusBarStyle: 'dark',
        statusBarHidden: false,
        statusBarTranslucent: false,
        animation: 'slide_from_right'
      }}>
      <Stack.Screen name={EStackScreens.SPLASH} component={StackRoutes.Splash} />
      <Stack.Screen name={EStackScreens.BOTTOM_NAVIGATOR} component={BottomNavigator} />
      <Stack.Screen name={EStackScreens.COIN_DETAILS} component={StackRoutes.CoinDetails} />
      <Stack.Screen name={EStackScreens.FAVOURITES} component={StackRoutes.Favourites} />
      <Stack.Screen name={EStackScreens.TRENDING_COINS_NFTS} component={StackRoutes.TrendingCoinsNfts} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
