import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/Navigator/Drawer'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
