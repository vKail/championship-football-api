import { date, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users';
import { relations } from 'drizzle-orm';

export const persons = pgTable('persons', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'person_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  dni: text().notNull(),
  name: text().notNull(),
  surname: text().notNull(),
  birthdate: date().notNull(),
  email: text().unique().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const personsRelations = relations(persons, ({ one }) => ({
  users: one(users),
}));
