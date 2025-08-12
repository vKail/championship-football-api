import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { team_members } from './team-members';
import { matches } from './matches';

export const goals = pgTable('goals', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'goal_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  match_id: integer().references(() => matches.id),
  player_id: integer().references(() => team_members.id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
