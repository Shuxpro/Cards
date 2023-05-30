import {Card} from '@shared/types/Card/Card';

export const filteredTasks = (result: Card[]): Card[] => {
  return result.filter((card: Card) => card.type === 'TASKS');
};
