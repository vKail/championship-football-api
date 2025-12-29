import { Person, PersonCreate } from './interface/person-domain.interface';

export class PersonEntity {
  private _id: number | null;
  private _dni: string;
  private _name: string;
  private _surname: string;
  private _birthdate: Date;
  private _email: string;

  private constructor(
    id: number | null,
    dni: string,
    name: string,
    surname: string,
    birthdate: Date,
    email: string
  ) {
    this._id = id;
    this._dni = dni;
    this._name = name;
    this._surname = surname;
    this._birthdate = birthdate;
    this._email = email;
  }

  static create(data: PersonCreate) {
    return new PersonEntity(
      null,
      data.dni,
      data.name,
      data.surname,
      data.birthdate,
      data.email
    );
  }

  static rebuild(data: Person) {
    return new PersonEntity(
      data.id,
      data.dni,
      data.name,
      data.surname,
      data.birthdate,
      data.email
    );
  }

  get id(): number | null {
    return this._id;
  }

  get dni(): string {
    return this._dni;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  get email(): string {
    return this._email;
  }

  get fullName() {
    return `${this._name} ${this._surname}`;
  }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this._birthdate.getFullYear();
    const monthDifference = today.getMonth() - this._birthdate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < this._birthdate.getDate())
    )
      age--;
    return age;
  }
}
