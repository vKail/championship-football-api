import { PersonEntity } from 'src/core/person/domain/person.entity';
import { USER_ROLE } from './emuns/user-role.enum';
import {
  User,
  UserCreate,
} from '../application/interfaces/user-domain.interface';

export class UserEntity {
  private _id: number | null;
  private _person: PersonEntity;
  private _role: USER_ROLE;
  private _username: string;
  private _password: string;

  private constructor(
    id: number | null,
    person: PersonEntity,
    role: USER_ROLE,
    username: string,
    password: string
  ) {
    this._id = id;
    this._person = person;
    this._role = role;
    this._username = username;
    this._password = password;
  }

  static create(data: UserCreate) {
    if (data.username.length < 3 || !data.username) {
      throw new Error('Username must have at least 3 characters');
    }
    return new UserEntity(
      null,
      data.person,
      data.role,
      data.username.trim(),
      data.password
    );
  }

  static rebuild(data: User) {
    return new UserEntity(
      data.id,
      data.person,
      data.role,
      data.username,
      data.password
    );
  }

  get id(): number | null {
    return this._id;
  }

  get person(): PersonEntity {
    return this._person;
  }

  get role(): USER_ROLE {
    return this._role;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}
