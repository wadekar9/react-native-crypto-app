import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabRoutes } from './routes';
import { moderateScale } from '$constants/styles.constants';
import { BottomTabsParamList } from '$types/navigation';
import { EBottomTabScreens } from '$constants/screens.contants';
import { TabBarButton, TabBarNavigator } from '$components/navigation';
import { useAppTheme } from '$hooks/common';
import { Home, Market, Settings } from '$assets/icons';

const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

const BottomNavigator: React.FC = () => {

    const { theme } = useAppTheme();

    return (
        <BottomTab.Navigator
            tabBar={(props) => <TabBarNavigator theme={'light'} {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <BottomTab.Screen
                name={EBottomTabScreens.HOME}
                component={BottomTabRoutes.Home}
                options={{
                    title: 'Home',
                    tabBarButton: (props) => (
                        <TabBarButton
                            {...props}
                            key={'home'}
                            theme={theme}
                            icon={({ color }) => <Home fill={color} width={moderateScale(24)} height={moderateScale(24)} />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.MARKET}
                component={BottomTabRoutes.Market}
                options={{
                    title: 'Market',
                    tabBarButton: (props) => (
                        <TabBarButton
                            {...props}
                            key={'market'}
                            theme={theme}
                            icon={({ color }) => <Market fill={color} width={moderateScale(24)} height={moderateScale(24)} />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name={EBottomTabScreens.SETTINGS}
                component={BottomTabRoutes.Settings}
                options={{
                    title: 'Settings',
                    tabBarButton: (props) => (
                        <TabBarButton
                            {...props}
                            key={'settings'}
                            theme={theme}
                            icon={({ color }) => <Settings fill={color} width={moderateScale(26)} height={moderateScale(26)} />}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomNavigator