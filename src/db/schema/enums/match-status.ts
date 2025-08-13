import { pgEnum } from 'drizzle-orm/pg-core';

export const MatchStatus = pgEnum('match_status', [
  'scheduled',
  'finished',
  'suspended',
  'postponed',
]);
