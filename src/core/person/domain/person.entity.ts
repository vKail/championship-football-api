export class PersonEntity {
  constructor(
    public readonly _id: number | null,
    public _dni: string,
    public _name: string,
    public _surename: string,
    public _birthdate: Date,
    public _email: string,
  ) {}

  get fullName() {
    return `${this._name} ${this._surename}`;
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
