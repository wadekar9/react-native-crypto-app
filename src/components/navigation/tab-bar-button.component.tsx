import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { ITheme } from '$types/common';

interface TabBarButtonProps extends BottomTabBarButtonProps {
    label?: string;
    theme: ITheme;
    icon: (e: { color: string; }) => React.ReactNode;
}

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {

    const { accessibilityState, onPress, onLongPress, icon, label } = props;

    const isFocused = accessibilityState?.selected;
    const Icon = icon;

    return (
        <TouchableOpacity
            activeOpacity={0.65}
            onPress={onPress}
            onLongPress={onLongPress!}
            style={styles.container}
        >
            <Icon color={isFocused ? EColors.PRIMARY_COLOR : EColors.GREY} />
            <Text numberOfLines={1} style={[styles.label, isFocused && { color: EColors.PRIMARY_COLOR }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: moderateScale(8)
    },
    label: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: moderateScale(14),
        textAlign: 'center',
        color: EColors.GREY
    }
})