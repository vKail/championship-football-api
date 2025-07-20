import { drizzle } from 'drizzle-orm/singlestore/driver';

export const drizzleProvider = {
  provide: 'DRIZZLE',
  useFactory: () => {
    const db = drizzle(process.env.DB_URL!);
    return db;
  },
};
