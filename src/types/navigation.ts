import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
    BottomTabNavigationProp,
    BottomTabScreenProps
} from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from '@react-navigation/native';
import { EBottomTabScreens, EStackScreens } from '$constants/screens.contants';

export type RootStackParamList = {
    [EStackScreens.SPLASH]: undefined;
    [EStackScreens.BOTTOM_NAVIGATOR]: undefined;
    [EStackScreens.BUY_SELL]: undefined,
    [EStackScreens.COIN]: undefined,
    [EStackScreens.DEPOSIT_WITHDRAWAL]: { requestType: string },
    [EStackScreens.RECEIVE_EXCHANGE]: undefined,
    [EStackScreens.SEND_EXCHANGE]: undefined,
    [EStackScreens.SPIN_WHEEL]: undefined,
    [EStackScreens.REFER_EARN]: undefined,
    [EStackScreens.HISTORY]: undefined,
};

export type BottomTabsParamList = {
    [EBottomTabScreens.HOME]: undefined;
    [EBottomTabScreens.MARKET]: undefined;
    [EBottomTabScreens.PORTFOLIO]: undefined;
    [EBottomTabScreens.PROFILE]: undefined;
    [EBottomTabScreens.REWARD]: undefined;
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