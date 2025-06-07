import { Expense, Group } from '@/types';

// Mock expenses data
export const mockExpenses: Expense[] = [
  {
    id: '1',
    description: 'Dinner at Italian Restaurant',
    amount: 120.50,
    category: 'food',
    date: '2025-08-05T19:30:00',
    paidBy: {
      id: 'user1',
      name: 'Alex',
      userId: 'currentUser',
    },
    group: 'Apartment 4B',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: 60.25 },
      { id: 'user2', name: 'Taylor', userId: 'user2', amount: -30.12 },
      { id: 'user3', name: 'Jordan', userId: 'user3', amount: -30.13 },
    ],
    status: 'pending',
  },
  {
    id: '2',
    description: 'Groceries from Whole Foods',
    amount: 85.75,
    category: 'shopping',
    date: '2025-08-03T14:20:00',
    paidBy: {
      id: 'user2',
      name: 'Taylor',
      userId: 'user2',
    },
    group: 'Apartment 4B',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: -42.87 },
      { id: 'user2', name: 'Taylor', userId: 'user2', amount: 85.75 },
    ],
    status: 'pending',
  },
  {
    id: '3',
    description: 'Movie Night Tickets',
    amount: 48.00,
    category: 'entertainment',
    date: '2025-07-28T20:00:00',
    paidBy: {
      id: 'user3',
      name: 'Jordan',
      userId: 'user3',
    },
    group: 'Weekend Fun',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: -16.00 },
      { id: 'user2', name: 'Taylor', userId: 'user2', amount: -16.00 },
      { id: 'user3', name: 'Jordan', userId: 'user3', amount: 48.00 },
      { id: 'user4', name: 'Casey', userId: 'user4', amount: -16.00 },
    ],
    status: 'settled',
  },
  {
    id: '4',
    description: 'Uber to Airport',
    amount: 35.25,
    category: 'transport',
    date: '2025-07-25T08:15:00',
    paidBy: {
      id: 'user1',
      name: 'Alex',
      userId: 'currentUser',
    },
    group: 'Weekend Trip',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: 23.50 },
      { id: 'user4', name: 'Casey', userId: 'user4', amount: -11.75 },
      { id: 'user5', name: 'Riley', userId: 'user5', amount: -11.75 },
    ],
    status: 'pending',
  },
  {
    id: '5',
    description: 'Coffee Run',
    amount: 18.50,
    category: 'coffee',
    date: '2025-07-23T09:30:00',
    paidBy: {
      id: 'user4',
      name: 'Casey',
      userId: 'user4',
    },
    group: 'Study Group',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: -6.17 },
      { id: 'user4', name: 'Casey', userId: 'user4', amount: 18.50 },
      { id: 'user5', name: 'Riley', userId: 'user5', amount: -6.17 },
      { id: 'user6', name: 'Morgan', userId: 'user6', amount: -6.16 },
    ],
    status: 'pending',
  },
  {
    id: '6',
    description: 'Utilities - August',
    amount: 145.80,
    category: 'home',
    date: '2025-08-01T12:00:00',
    paidBy: {
      id: 'user2',
      name: 'Taylor',
      userId: 'user2',
    },
    group: 'Apartment 4B',
    participants: [
      { id: 'user1', name: 'Alex', userId: 'currentUser', amount: -48.60 },
      { id: 'user2', name: 'Taylor', userId: 'user2', amount: 145.80 },
      { id: 'user3', name: 'Jordan', userId: 'user3', amount: -48.60 },
      { id: 'user4', name: 'Casey', userId: 'user4', amount: -48.60 },
    ],
    status: 'pending',
  },
];

// Mock groups data
export const mockGroups: Group[] = [
  {
    id: 'group1',
    name: 'Apartment 4B',
    members: [
      { id: 'user1', name: 'Alex', userId: 'currentUser' },
      { id: 'user2', name: 'Taylor', userId: 'user2' },
      { id: 'user3', name: 'Jordan', userId: 'user3' },
      { id: 'user4', name: 'Casey', userId: 'user4' },
    ],
    balance: -73.12,
    admin: 'user1',
  },
  {
    id: 'group2',
    name: 'Weekend Trip',
    members: [
      { id: 'user1', name: 'Alex', userId: 'currentUser' },
      { id: 'user4', name: 'Casey', userId: 'user4' },
      { id: 'user5', name: 'Riley', userId: 'user5' },
    ],
    balance: 52.75,
    admin: 'user2',
  },
  {
    id: 'group3',
    name: 'Study Group',
    members: [
      { id: 'user1', name: 'Alex', userId: 'currentUser' },
      { id: 'user4', name: 'Casey', userId: 'user4' },
      { id: 'user5', name: 'Riley', userId: 'user5' },
      { id: 'user6', name: 'Morgan', userId: 'user6' },
    ],
    balance: -12.35,
    admin: 'user1',
  },
  {
    id: 'group4',
    name: 'Weekend Fun',
    members: [
      { id: 'user1', name: 'Alex', userId: 'currentUser' },
      { id: 'user2', name: 'Taylor', userId: 'user2' },
      { id: 'user3', name: 'Jordan', userId: 'user3' },
      { id: 'user4', name: 'Casey', userId: 'user4' },
    ],
    balance: 0,
    admin: 'user3',
  },
];