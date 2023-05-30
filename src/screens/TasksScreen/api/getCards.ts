import {Card} from '@shared/types/Card/Card';
import {instanceAxios} from '../../../app/env';

export const getCards = async () => {
  const result = await instanceAxios.get<any, Card[]>(
    'https://example.ru/api/getCards',
  );
  return result;
};
