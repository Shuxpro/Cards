import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {MainScreenStackParams} from '../../shared/types/navigation/MainScreenStack';
import {MainScreen} from '../../screens/MainScreen/MainScreen';
import {TasksScreen} from '../../screens/TasksScreen/TasksScreen';

const Stack = createStackNavigator<MainScreenStackParams>();

export const BoardStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'MainScreen'} component={MainScreen} />
      <Stack.Screen name={'TasksScreen'} component={TasksScreen} />
    </Stack.Navigator>
  );
};
