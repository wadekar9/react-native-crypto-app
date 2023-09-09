import { MessageOptions } from 'react-native-flash-message';
import { createBottomTabNavigator, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';

export interface ToastMessage extends MessageOptions { 
    isPositive? :  boolean
}

export interface TabBarButtonComponentProps extends BottomTabBarButtonProps {
    label : string
    focusedIcon : React.ReactNode | SVGElement | any
    notFocusedIcon : React.ReactNode | SVGElement | any
}