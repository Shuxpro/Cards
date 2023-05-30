import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useStyles} from './styles';

import {useTheme} from '../../shared/theme/useTheme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainScreenStackParams} from '../../shared/types/navigation/MainScreenStack';
import {CustomButton} from '../../shared/ui/atoms/CustomButton';

export const MainScreen: React.FC = () => {
  const styles = useStyles();
  const {theme} = useTheme();

  const {navigate} =
    useNavigation<StackNavigationProp<MainScreenStackParams>>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.header}>
          <Text style={styles.text(theme.text.secondary)}>Tasks</Text>
        </View>

        <CustomButton
          buttonStyle={styles.button(theme.BG.sixthly)}
          text={'get Tasks'}
          onPress={() => {
            navigate('TasksScreen');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
