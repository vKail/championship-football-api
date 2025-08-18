import { PersonEntity } from 'src/core/person/domain/person.entity';
import { USER_ROLE } from './emuns/user-role.enum';

export class UserEntity {
  constructor(
    public readonly id: number | null,
    public person: PersonEntity,
    public role: USER_ROLE,
    public username: string,
    public password: string,
  ) {}
}
