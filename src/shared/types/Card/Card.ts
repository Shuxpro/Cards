export interface Card {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: (boolean | null)[];
  period_start: string | null;
  period_stop: string | null;
  type: 'ALL' | 'TASKS' | 'COURSES';
  description?: string | null;
  every_month?: (number | null)[];
}

export type CardAlert = Omit<Card, 'card_id' | 'photo_required' | 'schedule'>;
