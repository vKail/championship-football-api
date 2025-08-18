import { USER_ROLE } from '../../domain/emuns/user-role.enum';

export const roleBDtoDomain: Record<string, USER_ROLE> = {
  admin: USER_ROLE.ADMIN,
  user: USER_ROLE.USER,
};

export const roleEntityToDB: Record<USER_ROLE, string> = {
  [USER_ROLE.ADMIN]: 'admin',
  [USER_ROLE.USER]: 'user',
};
