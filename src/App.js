import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CurrentDay from "./components/CurrentDay/CurrentDay";
// import OtherDays from "./components/OtherDays/OtherDays";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="pageBackground">
      <WeatherProvider>
        <Header />
        <Form />
        <CurrentDay />
      </WeatherProvider>
    </div>
  );
}

export default App;
