import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const persons = pgTable('persons', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'person_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: text().notNull(),
  age: integer().notNull(),
  email: text().unique().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
