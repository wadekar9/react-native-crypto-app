import { MessageOptions } from 'react-native-flash-message';
import { createBottomTabNavigator, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ITheme = 'dark' | 'light';

export interface AppThemeContextProps {
    currentTheme: ITheme;
    changeTheme: (theme: ITheme) => void;
}

export interface IToastMessage extends MessageOptions {
    isPositive?: boolean
}

export interface ProfileMenusProps {
    id: number;
    label: string;
    icon: React.ReactNode | SVGElement | any,
    screenName?: string;
}

export interface MarketListItemProps {
    label: string;
    id: number;
}

export interface CustomKeyboardKeysItemProps {
    label: string;
    isIcon: boolean;
    externalStyle: StyleProp<ViewStyle>;
}

export interface BaseButtonProps {
    label: string;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}

export interface MarketSelectorProps {
    status?: boolean;
    changeStatus: (e: boolean) => void;
    sheetHeight?: number;
}