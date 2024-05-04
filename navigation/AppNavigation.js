import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import CardScreen from '../screens/CardScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{
                        title: 'News Screen',
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="CardScreen"
                    component={CardScreen}
                    options={{
                        title: 'Card Screen',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;



