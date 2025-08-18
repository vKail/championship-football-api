import { UserEntity } from '../../domain/user.entity';

export interface UserRepositoryInterface {
  getAll(): Promise<UserEntity[]>;
  getById(id: number): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity | null>;
  update(user: UserEntity): Promise<UserEntity | null>;
  delete(id: number): Promise<boolean>;
}
