import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, HomeFocusedIcon, PortfolioIcon, PortfolioFocusedIcon, GiftIcon, GiftFocusedIcon, ChartIcon, ChartFocusedIcon, ProfileIcon, ProfileFocusedIcon } from '../assets/icons/SVG/index';

//Screens
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import RewardScreen from '../screens/RewardScreen';
import MarketScreen from '../screens/MarketScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const TabBarButtonComponent = ({ label, accessibilityState, focusedIcon, notFocusedIcon, onPress }) => {

    const isFocused = accessibilityState.selected;
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
                isFocused ? <FocusedIcon /> : <NotFocusedIcon />
            }
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const BottomNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <BottomTab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    title : 'Home',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={HomeFocusedIcon}
                        notFocusedIcon={HomeIcon}
                        label={'Home'}
                    />
                }}
            />
            <BottomTab.Screen
                name='PortfolioScreen'
                component={PortfolioScreen}
                options={{
                    title : 'Portfolio',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={PortfolioFocusedIcon}
                        notFocusedIcon={PortfolioIcon}
                        label={'Portfolio'}
                    />
                }}
            />
            <BottomTab.Screen
                name='RewardScreen'
                component={RewardScreen}
                options={{
                    title : 'Rewards',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={GiftFocusedIcon}
                        notFocusedIcon={GiftIcon}
                        label={'Rewards'}
                    />
                }}
            />
            <BottomTab.Screen
                name='MarketScreen'
                component={MarketScreen}
                options={{
                    title : 'Market',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={ChartFocusedIcon}
                        notFocusedIcon={ChartIcon}
                        label={'Market'}
                    />
                }}
            />
            <BottomTab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    title : 'Profile',
                    tabBarButton : (props) => <TabBarButtonComponent 
                        {...props}
                        focusedIcon={ProfileFocusedIcon}
                        notFocusedIcon={ProfileIcon}
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
        justifyContent : 'center'
    }
})