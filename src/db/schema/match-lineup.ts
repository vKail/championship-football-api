import { boolean, integer, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { matches } from './matches';
import { team_members } from './team-members';

export const matchLineups = pgTable('match_lineups', {
  id: integer().primaryKey().notNull().generatedAlwaysAsIdentity({
    name: 'id_match_lineup_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  match_id: integer().references(() => matches.id),
  player_id: integer().references(() => team_members.id),
  is_starter: boolean().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
