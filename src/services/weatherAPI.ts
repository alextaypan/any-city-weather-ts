import axios from "axios";
import { IWeatherData } from '../types/dataWeatherInfo'
import {getErrorMessage, reportError} from './Errors'


axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather/";
const API_KEY = "04fc84e5f5a3b3191025682530487cc6";

const fetchWeather = async (cityName: string) => {
  try {
    const { data } = await axios.get<IWeatherData>(
      `?q=${cityName}&&lang=en&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    reportError({message: getErrorMessage(error)})
  }
};

export default fetchWeather;
