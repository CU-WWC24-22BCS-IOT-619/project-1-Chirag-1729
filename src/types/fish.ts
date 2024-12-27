export interface FishType {
  id: number;
  name: string;
  weight: number;
  difficulty: number;
  catchProbability: number;
}

export const FISH_TYPES: FishType[] = [
  { id: 1, name: 'Bass', weight: 2.5, difficulty: 3, catchProbability: 0.6 },
  { id: 2, name: 'Trout', weight: 1.8, difficulty: 2, catchProbability: 0.7 },
  { id: 3, name: 'Salmon', weight: 4.2, difficulty: 4, catchProbability: 0.4 },
  { id: 4, name: 'Pike', weight: 5.0, difficulty: 5, catchProbability: 0.3 },
];