import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from '../../../screens/Splash';
import Home from '../../../screens/Home'
import TabNavigator from "../Tab";
import Reserva from '../../../screens/Reserva';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Ver Reservas" component={Reserva} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;