import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const categorys = pgTable('categories', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'category_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: text().notNull(),
  min_age: integer().notNull(),
  max_age: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
