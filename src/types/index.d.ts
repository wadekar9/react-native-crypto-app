import { MessageOptions } from 'react-native-flash-message';
import { createBottomTabNavigator, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { RBSheetProps } from 'react-native-raw-bottom-sheet';

export interface ToastMessage extends MessageOptions {
    isPositive?: boolean
}

export interface TabBarButtonComponentProps extends BottomTabBarButtonProps {
    label: string
    focusedIcon: React.ReactNode | SVGElement | any
    notFocusedIcon: React.ReactNode | SVGElement | any
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
    label : string;
    isIcon : boolean;
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
    changeStatus: (e : boolean) => void;
    sheetHeight?: number;
}