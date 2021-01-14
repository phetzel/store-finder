import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import StoreMap from '../screens/StoreMap';
import StoreDetails from '../screens/StoreDetails';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
    return (
    <Stack.Navigator>
        <Stack.Screen 
            name="StoreMap" 
            component={StoreMap} 
            options={{ headerShown: false }} />
        <Stack.Screen 
            name="StoreDetails" 
            component={StoreDetails} 
            options={{ headerShown: false }} />
    </Stack.Navigator>
    );
};


export default AppNavigator;