import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Splash from '../../../screens/Splash';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Splash" component={Splash}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator };