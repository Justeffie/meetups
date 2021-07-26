export class User {

  public id: number;
  public name: string;
  public surname: string;
  public age: number;
  public email: string;
  public meetupsCreated: number[];
  public meetupsIn: number[];

  constructor(name: string, surname: string, age: number, email: string, meetupsCreated: number[], meetupsIn: number[]) {}
}
