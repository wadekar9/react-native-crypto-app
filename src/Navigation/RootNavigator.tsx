import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import BottomNavigator from './BottomNavigator';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown : false
                }}
            >
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='BottomNavigator'
                    component={BottomNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;