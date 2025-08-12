import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { categorys } from './categories';
export const teams = pgTable('teams', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'team_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const team_category = pgTable('team_categories', {
  team_id: integer().references(() => teams.id),
  category_id: integer().references(() => categorys.id),
});
