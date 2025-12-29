export interface Person {
  id: number | null;
  dni: string;
  name: string;
  surname: string;
  birthdate: Date;
  email: string;
}

export type PersonCreate = Omit<Person, 'id'>;
