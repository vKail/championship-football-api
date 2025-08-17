export class PersonEntity {
  constructor(
    private readonly _id: number,
    private readonly _dni: string,
    private readonly _name: string,
    private readonly _surename: string,
    private readonly _birthdate: Date,
    private readonly _email: string,
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
