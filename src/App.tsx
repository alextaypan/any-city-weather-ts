import { useState, FC } from "react";
import Container from "./Components/Container/Container";
import SearchForm from "./Components/SeacrhFrom/SearchForm";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (newSearch: string) => {
    setQuery(newSearch);
  };

  return (
    <Container>
      <ToastContainer autoClose={2000} position="top-right" theme="colored" />
      <SearchForm onHandleSubmit={handleSubmit} />
      <WeatherInfo cityName={query} />
    </Container>
  );
};

export default App;
