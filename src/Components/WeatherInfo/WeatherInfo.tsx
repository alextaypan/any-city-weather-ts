import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetchWeather from "../../services/weatherAPI";
import DataWeatherInfo from "../DataWeatherInfo/DataWeatherInfo";
import Loader from "../Loader";
import { IWeatherData } from "../../types/dataWeatherInfo";
import { getErrorMessage, reportError } from "../../services/Errors";

interface WeatherInfoProps {
  cityName: IWeatherData;
}

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected,",
};

const WeatherInfo: FC<WeatherInfoProps> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!cityName) {
      return;
    }
    fetchWeatherData();
    setStatus(Status.PENDING);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const fetchWeatherData = async () => {
    try {
      const data = await fetchWeather(cityName);
      const { name } = data;
      const { country } = data.sys;
      const { temp, temp_min, temp_max, feels_like, humidity } = data.main;
      const { description, icon } = data.weather[0];
      const { speed, deg } = data.wind;

      setWeatherData({
        name,
        country,
        description,
        icon,
        temp: temp.toFixed(),
        feels_like: feels_like.toFixed(),
        temp_min: temp_min.toFixed(),
        temp_max: temp_max.toFixed(),
        speed,
        deg,
        humidity,
      });
      setStatus(Status.RESOLVED);
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
      toast.error("There is no city with that name");
      setStatus(Status.REJECTED);
    }
  };

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return null;
  }

  if (status === Status.RESOLVED) {
    return <DataWeatherInfo weatherData={weatherData} />;
  }
};

export default WeatherInfo;
