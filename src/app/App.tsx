import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './navigation/MainStack';

const Application: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Application;
