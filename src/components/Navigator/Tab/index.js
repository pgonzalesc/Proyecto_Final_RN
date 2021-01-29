import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator } from "../Stack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              }
              return (<Icon name={iconName} size={size} color={color}/>);
            },
          })}
          tabBarOptions={{
            activeTintColor: '#56B5C1',
            inactiveTintColor: 'gray',
          }} >
          <Tab.Screen name="Home" component={MainStackNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator;