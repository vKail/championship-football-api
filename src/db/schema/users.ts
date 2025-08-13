import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { persons } from './persons';
import { Role } from './enums/user-role';

export const user = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'user_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  person_id: integer().references(() => persons.id),
  role: Role('role').default('user'),
  username: text().notNull().unique(),
  password: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
