export interface WeightRecord {
  date: string; // ISO Date
  weight: number; // kg
}

export interface MilkRecord {
  date: string; // ISO Date
  liters: number;
}

export enum CowStatus {
  ACTIVE = 'Активна',
  SICK = 'Больна',
  SOLD = 'Продана',
  DECEASED = 'Пала',
}

export interface Cow {
  id: string;
  name: string;
  tagNumber: string; // Birka
  birthDate: string; // ISO Date
  breed: string;
  inseminationDate?: string;
  status: CowStatus;
  weightHistory: WeightRecord[];
  milkHistory: MilkRecord[];
  notes: string;
  photoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}