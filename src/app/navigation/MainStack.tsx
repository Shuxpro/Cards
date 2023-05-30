import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParams} from '../../shared/types/navigation/MainStack';
import {BoardStack} from './TasksStack';

const Stack = createStackNavigator<MainStackParams>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainStack'} component={BoardStack} />
    </Stack.Navigator>
  );
}
