import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { BottomNavigationRoutes } from './Routes';
import { TabBarButtonComponentProps } from '@types';
import { GiftFocusedIcon, GiftUnfocusedIcon, GraphFocusedIcon, GraphUnfocusedIcon, HomeFocusedIcon, HomeUnfocusedIcon, PortfolioFocusedIcon, PortfolioUnfocusedIcon,ProfileFocusedIcon, ProfileUnfocusedIcon } from '@assets/icons';
import { Colors, Fonts, moderateScale } from '@utils/theme';
import { BottomTabsParamList } from '@utils/navigation';

const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

const TabBarButtonComponent: React.FC<TabBarButtonComponentProps> = ({ label, accessibilityState, focusedIcon, notFocusedIcon, onPress } : TabBarButtonComponentProps) => {

    const isFocused : boolean = accessibilityState?.selected!;
    const FocusedIcon = focusedIcon;
    const NotFocusedIcon = notFocusedIcon;

    return(
        <TouchableOpacity
            accessibilityRole={'tab'}
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.tabButtonContainer}
        >
            {
                isFocused ? <FocusedIcon key={'focused-icon'} /> : <NotFocusedIcon key={'unfocused-icon'} />
            }
            <Text style={[styles.tabBarLabelStyle, { color : isFocused ? Colors.PRIMARY_COLOR : Colors.GREY }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const BottomNavigator : React.FC = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown : false,
                tabBarShowLabel : true,
                tabBarStyle : {
                    height : moderateScale(65)
                }
            }}
        >
            <BottomTab.Screen
                name='HomeScreen'
                component={BottomNavigationRoutes.HomeScreen}
                options={{
                    title : 'Home',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={HomeFocusedIcon}
                        notFocusedIcon={HomeUnfocusedIcon}
                        label={'Home'}
                    />
                }}
            />
            <BottomTab.Screen
                name='PortfolioScreen'
                component={BottomNavigationRoutes.PortfolioScreen}
                options={{
                    title : 'Portfolio',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={PortfolioFocusedIcon}
                        notFocusedIcon={PortfolioUnfocusedIcon}
                        label={'Portfolio'}
                    />
                }}
            />
            <BottomTab.Screen
                name='RewardScreen'
                component={BottomNavigationRoutes.RewardScreen}
                options={{
                    title : 'Rewards',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={GiftFocusedIcon}
                        notFocusedIcon={GiftUnfocusedIcon}
                        label={'Rewards'}
                    />
                }}
            />
            <BottomTab.Screen
                name='MarketScreen'
                component={BottomNavigationRoutes.MarketScreen}
                options={{
                    title : 'Market',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={GraphFocusedIcon}
                        notFocusedIcon={GraphUnfocusedIcon}
                        label={'Market'}
                    />
                }}
            />
            <BottomTab.Screen
                name='ProfileScreen'
                component={BottomNavigationRoutes.ProfileScreen}
                options={{
                    title : 'Profile',
                    tabBarButton : (props) => <TabBarButtonComponent 
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
    tabButtonContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    tabBarLabelStyle : {
        fontFamily : Fonts.CIRCULAR_STD_BOOK,
        fontSize : moderateScale(13)
    }
})