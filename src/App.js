import Container from "./components/Container/Container";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <ThemeProvider>
          <Container />
        </ThemeProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
