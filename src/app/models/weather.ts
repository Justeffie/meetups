export class Weather {

  public id: number;
  public datetime: number;
  summary: string;
  location: string;
  temperatureMin: number;
  temperatureMax: number;
  humidity: number;

  constructor(datetime: number, summary: string, location: string, temperatureMin: number, temperatureMax: number,
              humidity: number) {}
}
