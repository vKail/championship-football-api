import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '../db/schema';
import * as postgres from 'postgres';
export const AsyncDrizzleProvider = 'DRIZZLE';
import 'dotenv/config';

export const drizzleProvider = {
  provide: AsyncDrizzleProvider,
  useFactory: async () => {
    const client = postgres(
      `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`
    );
    const db = drizzle(client, { schema, logger: true });
    return db;
  },
};
