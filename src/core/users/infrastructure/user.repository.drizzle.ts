import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../domain/user.entity';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { AsyncDrizzleProvider } from 'src/drizzle/drizzle.provider';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../../../db/schema';
import { UserMapper } from './helpers/user-mapper';
import { eq, sql } from 'drizzle-orm';

@Injectable()
export class UserRepositoryImpl implements UserRepositoryInterface {
  constructor(
    @Inject(AsyncDrizzleProvider) private db: PostgresJsDatabase<typeof schema>
  ) {}

  async getById(id: number): Promise<UserEntity | null> {
    const row = await this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      with: { person: true },
    });
    return row ? UserMapper.fromPersistence(row) : null;
  }
  async create(user: UserEntity): Promise<UserEntity | null> {
    const [person] = await this.db
      .insert(schema.persons)
      .values({
        dni: user.person.dni,
        name: user.person.name,
        surname: user.person.surname,
        birthdate: user.person.birthdate.toISOString().split('T')[0],
        email: user.person.email,
      })
      .returning();
    if (!person) return null;

    const [userRow] = await this.db
      .insert(schema.users)
      .values({
        username: user.username,
        role: user.role,
        password: user.password,
        person_id: person.id,
      })
      .returning();

    return userRow
      ? UserMapper.fromPersistence({
          ...userRow,
          person,
        })
      : null;
  }

  async update(user: UserEntity): Promise<UserEntity | null> {
    const [person] = await this.db
      .update(schema.persons)
      .set({
        dni: user.person.dni,
        name: user.person.name,
        surname: user.person.surname,
        birthdate: user.person.birthdate.toISOString().split('T')[0],
        email: user.person.email,
        updated_at: sql`NOW()`,
      })
      .where(eq(schema.users.person_id, user.person.id));

    if (!person) return null;

    const [updatedUser] = await this.db
      .update(schema.users)
      .set({
        username: user.username,
        role: user.role,
        updated_at: sql`NOW()`,
      })
      .where(eq(schema.users.id, user.id));

    return updatedUser ? user : null;
  }
  async delete(id: number): Promise<boolean> {
    const [userToDelete] = await this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, id));

    if (!userToDelete) return false;

    const personDeleted = await this.db
      .delete(schema.persons)
      .where(eq(schema.users.person_id, userToDelete.person_id));
    const userDeleted = await this.db
      .delete(schema.users)
      .where(eq(schema.users.id, id));

    return personDeleted.length > 0 && userDeleted.length > 0;
  }
  async getAll(): Promise<UserEntity[]> {
    const row = await this.db.query.users.findMany({
      with: { person: true },
    });
    return row.map((row) => UserMapper.fromPersistence(row));
  }
}
