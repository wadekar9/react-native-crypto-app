import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabRoutes } from './routes';
import { GiftFocusedIcon, GiftUnfocusedIcon, GraphFocusedIcon, GraphUnfocusedIcon, HomeFocusedIcon, HomeUnfocusedIcon, PortfolioFocusedIcon, PortfolioUnfocusedIcon, ProfileFocusedIcon, ProfileUnfocusedIcon } from '$assets/icons';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { BottomTabsParamList } from '$types/navigation';
import { EBottomTabScreens } from '$constants/screens.contants';

const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

const TabBarButtonComponent: React.FC<any> = ({ label, accessibilityState, focusedIcon, notFocusedIcon, onPress }: any) => {

    const isFocused: boolean = accessibilityState?.selected!;
    const FocusedIcon = focusedIcon;
    const NotFocusedIcon = notFocusedIcon;

    return (
        <TouchableOpacity
            accessibilityRole={'tab'}
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.tabButtonContainer}
        >
            {
                isFocused ? <FocusedIcon key={'focused-icon'} /> : <NotFocusedIcon key={'unfocused-icon'} />
            }
            <Text style={[styles.tabBarLabelStyle, { color: isFocused ? EColors.PRIMARY_COLOR : EColors.GREY }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const BottomNavigator: React.FC = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: moderateScale(65)
                }
            }}
        >
            <BottomTab.Screen
                name={EBottomTabScreens.HOME}
                component={BottomTabRoutes.Home}
                options={{
                    title: 'Home',
                    tabBarButton: (props: any) => <TabBarButtonComponent
                        {...props}
                        focusedIcon={HomeFocusedIcon}
                        notFocusedIcon={HomeUnfocusedIcon}
                        label={'Home'}
                    />
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.PORTFOLIO}
                component={BottomTabRoutes.Portfolio}
                options={{
                    title: 'Portfolio',
                    tabBarButton: (props: any) => <TabBarButtonComponent
                        {...props}
                        focusedIcon={PortfolioFocusedIcon}
                        notFocusedIcon={PortfolioUnfocusedIcon}
                        label={'Portfolio'}
                    />
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.REWARD}
                component={BottomTabRoutes.Reward}
                options={{
                    title: 'Rewards',
                    tabBarButton: (props: any) => <TabBarButtonComponent
                        {...props}
                        focusedIcon={GiftFocusedIcon}
                        notFocusedIcon={GiftUnfocusedIcon}
                        label={'Rewards'}
                    />
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.MARKET}
                component={BottomTabRoutes.Market}
                options={{
                    title: 'Market',
                    tabBarButton: (props: any) => <TabBarButtonComponent
                        {...props}
                        focusedIcon={GraphFocusedIcon}
                        notFocusedIcon={GraphUnfocusedIcon}
                        label={'Market'}
                    />
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.PROFILE}
                component={BottomTabRoutes.Profile}
                options={{
                    title: 'Profile',
                    tabBarButton: (props: any) => <TabBarButtonComponent
                        {...props}
                        focusedIcon={ProfileFocusedIcon}
                        notFocusedIcon={ProfileUnfocusedIcon}
                        label={'Profile'}
                    />
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    tabButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    tabBarLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(13)
    }
})