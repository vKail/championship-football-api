import { PersonEntity } from 'src/core/person/domain/person.entity';
import { USER_ROLE } from './emuns/user-role.enum';

export class UserEntity {
  constructor(
    private readonly id: number,
    private person: PersonEntity,
    private role: USER_ROLE,
    private username: string,
    private password: string,
  ) {}
}
