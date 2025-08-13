import { pgEnum } from 'drizzle-orm/pg-core';

export const Role = pgEnum('user_role', ['admin', 'user']);
