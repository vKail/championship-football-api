import { date, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { teams } from './teams';
import { MatchStatus } from '../enums/match-status';

export const matches = pgTable('matches', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'id_matches_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  home_team: integer().references(() => teams.id),
  away_team: integer().references(() => teams.id),
  date: date().notNull(),
  status: text().notNull().default(MatchStatus.SCHEDULED),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
