import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
    BottomTabNavigationProp,
    BottomTabScreenProps
} from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from '@react-navigation/native';

export type RootStackParamList = {
    SplashScreen: undefined;
    BottomNavigator: undefined;
};

export type BottomTabsParamList = {
    HomeScreen: undefined;
    MarketScreen: undefined;
    PortfolioScreen: undefined;
    ProfileScreen: undefined;
    RewardScreen: undefined;
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