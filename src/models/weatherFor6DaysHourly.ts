import {WeatherForHour} from './weatherForHour';
export class WeatherFor6DaysHourly{
    "cod": string
    "message": number
    "cnt": number
    "list": WeatherForHour[]
    "city": {
      "id": number
      "name": string
      "coord": {
        "lat": string
        "lon": string
      }
      "country": string
      "population": number
      "timezone": number
      "sunrise": number
      "sunset": number
    }
    constructor(){}
  }