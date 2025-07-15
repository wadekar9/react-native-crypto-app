import { DEVICE_WIDTH, EColors, moderateScale } from '$constants/styles.constants';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ITheme } from '$types/common';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface TabBarNavigatorProps extends BottomTabBarProps {
    theme: ITheme;
}

const TabBarNavigator: React.FC<TabBarNavigatorProps> = ({ state, descriptors, navigation, theme }) => {

    const insets = useSafeAreaInsets();
    const styles = styling(theme);

    return (
        <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const TabBarButton = options.tabBarButton as any;

                    return (
                        <TabBarButton
                            label={label}
                            key={index.toString()}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                        />
                    )
                })}
            </View>
        </View>
    );
}

export default TabBarNavigator;

const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        width: '100%',
        height: moderateScale(75),
        flexDirection: 'row'
    },
    wrapper: {
        width: DEVICE_WIDTH,
        backgroundColor: EColors.BACKGROUND_COLOR,
        borderTopWidth: moderateScale(1),
        borderColor: EColors.BORDER_COLOR
    }
});