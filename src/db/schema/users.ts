import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { persons } from './persons';
import { Role } from './enums/user-role';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'user_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  person_id: integer()
    .references(() => persons.id)
    .notNull(),
  role: Role('role').default('user'),
  username: text().notNull().unique(),
  password: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ one }) => ({
  person: one(persons, {
    fields: [users.person_id],
    references: [persons.id],
  }),
}));
