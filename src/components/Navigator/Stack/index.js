import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Splash from '../../../screens/Splash';
import Detalle from '../../../screens/Detalle';
import Reserva from '../../../screens/Reserva';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Detalle" component={Detalle}/>
            <Stack.Screen name="Reservas" component={Reserva}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator };