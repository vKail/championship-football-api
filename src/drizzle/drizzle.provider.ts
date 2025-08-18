import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '../db/schema';
import * as postgres from 'postgres';
export const AsyncDrizzleProvider = 'DRIZZLE';
import 'dotenv/config';

export const drizzleProvider = {
  provide: AsyncDrizzleProvider,
  useFactory: async () => {
    const client = postgres(process.env.DB_URL);
    const db = drizzle(client, { schema, logger: true });
    return db;
  },
};
