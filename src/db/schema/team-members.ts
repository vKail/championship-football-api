import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { persons } from './persons';
import { teams } from './teams';
import { MemberType } from './enums/member-type';
import { categorys } from './categories';

export const team_members = pgTable('team_members', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: 'team_member_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  team_id: integer().references(() => teams.id),
  person_id: integer().references(() => persons.id),
  back_number: integer(),
  position: text(),
  member_type: MemberType('member_type').default('player'),
  id_category: integer().references(() => categorys.id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
