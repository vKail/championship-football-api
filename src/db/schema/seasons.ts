import { date, integer, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { teams } from './teams';

export const seasons = pgTable('seasons', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'season_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  initial_date: date().notNull(),
  final_date: date().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const season_teams = pgTable('season_teams', {
  id_season: integer().references(() => seasons.id),
  id_team: integer().references(() => teams.id),
});
