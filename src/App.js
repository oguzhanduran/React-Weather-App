import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CurrentDay from "./components/CurrentDay/CurrentDay";
import OtherDays from "./components/OtherDays/OtherDays";

function App() {
  return (
    <div className="pageBackground">
      <Header />
      <Form />
      <CurrentDay />
      <OtherDays />
    </div>
  );
}

export default App;
