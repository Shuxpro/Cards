import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useStyles} from './styles';
import {useTheme} from '../../shared/theme/useTheme';
import {getCards} from './api/getCards';
import {useFocusEffect} from '@react-navigation/native';
import {addCard} from './lib/addCard';
import {Card} from '@shared/types/Card/Card';
import {filteredTasks} from './lib/filteredTasks';
import {CardsTest} from './configTest';

export const TasksScreen: React.FC = () => {
  const styles = useStyles();
  const {theme} = useTheme();
  const [newCards, setNewCards] = useState<Card[]>();

  useFocusEffect(
    useCallback(() => {
      let id: any;

      function longPoolingFunc(func: () => void): any {
        func();
        id = setTimeout(() => longPoolingFunc(func), 10000);
      }

      longPoolingFunc(async () => {
        const newCards = await getCards().catch(error =>
          console.log(error.message, '123'),
        );

        const filterCards = filteredTasks(newCards || CardsTest);
        setNewCards(filterCards);
      });

      return () => {
        clearTimeout(id);
      };
    }, []),
  );

  const onCardPress = (card: Card) => {
    Alert.alert(`Name: ${card.name}, Description: ${card.description}`);
    const {card_id, photo_required, schedule, ...cardAlert} = card;
    addCard({
      ...cardAlert,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text(theme.text.secondary)}>Task List</Text>
        </View>
        <View style={styles.main}>
          {newCards && newCards.length <= 0 && (
            <Text style={styles.text(theme.text.secondary)}>
              There is no Cards.
            </Text>
          )}
          {newCards &&
            newCards.map(newCards => (
              <Pressable
                style={styles.card}
                key={newCards.card_id}
                onPress={() => {
                  onCardPress(newCards);
                }}>
                <Text>{newCards.name}</Text>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
