interface IDescr {
  description: string;
  icon: string;
}

interface IWind {
  speed: number;
  deg: number;
}

interface ICountry {
  country: string;
}

interface IMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
}

export interface IWeatherData {
  name: string;
  country: ICountry;
  main: IMain;
  weather: IDescr;
  wind: IWind;
}