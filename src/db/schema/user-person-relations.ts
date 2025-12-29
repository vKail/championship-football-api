import { relations } from 'drizzle-orm';
import { users } from './users';
import { persons } from './persons';

export const usersRelations = relations(users, ({ one }) => ({
  person: one(persons, {
    fields: [users.person_id],
    references: [persons.id],
  }),
}));

export const personsRelations = relations(persons, ({ one }) => ({
  user: one(users),
}));
