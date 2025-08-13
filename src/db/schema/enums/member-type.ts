import { pgEnum } from 'drizzle-orm/pg-core';

export const MemberType = pgEnum('menber_type', [
  'player',
  'coach',
  'manager',
  'other',
]);
