// User type
export interface User {
  id: string;
  name: string;
  userId: string;
}

// Participant in an expense
export interface Participant extends User {
  included?: boolean;
  amount: number;
}

// Expense type
export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  paidBy: User;
  group: string;
  participants: Participant[];
  status: 'pending' | 'settled';
}

// Group type
export interface Group {
  id: string;
  name: string;
  members: User[];
  balance: number;
  admin: string;
}

// ExpenseSplit type
export type SplitMethod = 'equal' | 'custom';