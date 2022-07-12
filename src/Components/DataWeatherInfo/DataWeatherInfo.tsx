import s from "./DataWeatherInfo.module.css";
import tempIcon from "../../images/ico-temperature.png";
import windIcon from "../../images/wind.png";
import dropIcon from "../../images/drop.png";

const DataWeatherInfo = ({
  weatherData: {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    description,
    icon,
    speed,
  },
}) => {
  return (
    <main className={s.container}>
      <h1 className={s.title}>
        Weather in {name}, {country}
      </h1>
      <div className={s.wrapper}>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
          width="40"
          height="40"
          className={s.icon}
        />
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.wrapper}>
        <img
          src={tempIcon}
          alt="Thermometer"
          width="40"
          height="40"
          className={s.icon}
        />
        <ul className={s.description}>
          <li>
            <b>Feels like:</b> {feels_like} °С
          </li>
          <li>
            <b>Current:</b> {temp} °С
          </li>
          <li>
            <b>High:</b> {temp_max} °С
          </li>
          <li>
            <b>Low:</b> {temp_min} °С
          </li>
        </ul>
      </div>

      <div className={s.wrapper}>
        <img
          src={windIcon}
          alt="Wind Speed"
          width="40"
          height="40"
          className={s.icon}
        />
        <p className={s.description}>
          <b>Wind Speed:</b> {speed} м/с
        </p>
      </div>
      <div className={s.wrapper}>
        <img
          src={dropIcon}
          alt="Humidity"
          width="40"
          height="40"
          className={s.icon}
        />
        <p className={s.description}>
          <b>Humidity:</b> {humidity} %
        </p>
      </div>
    </main>
  );
};

export default DataWeatherInfo;
