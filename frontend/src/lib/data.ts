import type { User, Transaction } from './types';

export const users: User[] = [
  { id: 'user-1', name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://placehold.co/100x100.png', balance: 5420.50, "data-ai-hint": "woman portrait" },
  { id: 'user-2', name: 'Bob Williams', email: 'bob@example.com', avatar: 'https://placehold.co/100x100.png', balance: 1250.75, "data-ai-hint": "man portrait" },
  { id: 'user-3', name: 'Charlie Brown', email: 'charlie@example.com', avatar: 'https://placehold.co/100x100.png', balance: 7890.00, "data-ai-hint": "man portrait" },
  { id: 'user-4', name: 'Diana Prince', email: 'diana@example.com', avatar: 'https://placehold.co/100x100.png', balance: 3210.25, "data-ai-hint": "woman portrait" },
  { id: 'user-5', name: 'Ethan Hunt', email: 'ethan@example.com', avatar: 'https://placehold.co/100x100.png', balance: 10000.00, "data-ai-hint": "man portrait" },
  { id: 'user-6', name: 'Fiona Glenanne', email: 'fiona@example.com', avatar: 'https://placehold.co/100x100.png', balance: 654.80, "data-ai-hint": "woman portrait" },
];

export const transactions: Transaction[] = [
  { id: 'txn-1', type: 'deposit', amount: 1000, date: '2025-07-20T10:00:00Z', description: 'Monthly Salary', status: 'completed' },
  { id: 'txn-2', type: 'transfer', amount: 150.75, date: '2025-07-19T14:30:00Z', description: 'Dinner with friends', status: 'completed', from: users[0], to: users[1] },
  { id: 'txn-3', type: 'withdrawal', amount: 50, date: '2025-07-18T09:15:00Z', description: 'ATM Withdrawal', status: 'completed' },
  { id: 'txn-4', type: 'transfer', amount: 45.50, date: '2025-07-17T18:00:00Z', description: 'Movie tickets', status: 'completed', from: users[0], to: users[3] },
  { id: 'txn-5', type: 'deposit', amount: 200, date: '2025-07-16T11:45:00Z', description: 'Freelance project payment', status: 'completed' },
  { id: 'txn-6', type: 'transfer', amount: 500, date: '2025-07-15T20:00:00Z', description: 'Rent payment', status: 'completed', from: users[0], to: users[4] },
];

export const favoriteContacts: User[] = [
  users[1], users[3], users[2], users[5]
];


export const getAuthenticatedUser = (): User => {
  // In a real app, this would involve session/token management.
  // For time being added this
  return users[0];
};

export const analyticsData = [
    { month: "Jan", sent: 400, received: 240 },
    { month: "Feb", sent: 300, received: 139 },
    { month: "Mar", sent: 200, received: 980 },
    { month: "Apr", sent: 278, received: 390 },
    { month: "May", sent: 189, received: 480 },
    { month: "Jun", sent: 239, received: 380 },
    { month: "Jul", sent: 349, received: 430 },
]
