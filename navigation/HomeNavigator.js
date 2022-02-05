import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTheme from '../theme/HomeTheme';
import ChittyMaster from '../screens/ChittyMaster';
import ChittyOpening from '../screens/ChittyOpening';
import HomeScreen from '../screens/HomeScreen';

const theme = HomeTheme(false);
const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ChittyMaster" component={ChittyMaster} />
                <Stack.Screen name="ChittyOpening" component={ChittyOpening} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}