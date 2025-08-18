import * as bcrypt from 'bcrypt';

export const HashPassword = (password: string): Promise<string> => {
  const salOrRounds = 10;

  return bcrypt.hash(password, salOrRounds);
};
