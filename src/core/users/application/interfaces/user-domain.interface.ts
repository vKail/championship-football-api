import { PersonEntity } from 'src/core/person/domain/person.entity';
import { USER_ROLE } from '../../domain/emuns/user-role.enum';

export interface User {
  id: number | null;
  person: PersonEntity;
  role: USER_ROLE;
  username: string;
  password: string;
}

export type UserCreate = Omit<User, 'id'>;
