export class Meetup {

  public id: number;
  public title: string;
  public description: string;
  public location: string;
  public datetime: number;
  public totalBirras: number;
  public totalGuests: number;
  public usersIn: number[];
  public weather: number;

  constructor(title: string, description: string, location: string, datetime: number, totalBirras: number, totalGuests: number,
              usersIn: number[], weather: number) {}
}
