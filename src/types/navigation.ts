import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
    BottomTabNavigationProp,
    BottomTabScreenProps
} from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from '@react-navigation/native';
import { EBottomTabScreens, EStackScreens } from '$constants/screens.constants';

export type RootStackParamList = {
    [EStackScreens.SPLASH]: undefined;
    [EStackScreens.BOTTOM_NAVIGATOR]: undefined;
    [EStackScreens.COIN_DETAILS]: undefined;
    [EStackScreens.FAVOURITES]: undefined;
    [EStackScreens.SEARCH]: undefined;
    [EStackScreens.CURRENCY_CONVERTER]: undefined;
    [EStackScreens.TRENDING_COINS_NFTS]: { coins: string; nfts: string; };
};

export type BottomTabsParamList = {
    [EBottomTabScreens.HOME]: undefined;
    [EBottomTabScreens.MARKET]: undefined;
    [EBottomTabScreens.SETTINGS]: undefined;
};


export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
>;

export type BottomTabsScreenProps<T extends keyof BottomTabsParamList> = BottomTabScreenProps<
    BottomTabsParamList,
    T
>;

export type RootStackNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type BottomNavigationProps = BottomTabNavigationProp<BottomTabsParamList>;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();