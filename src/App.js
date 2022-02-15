import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CurrentDay from "./components/CurrentDay/CurrentDay";

function App() {
  return (
    <div className="pageBackground">
      <Header />
      <Form />
      <CurrentDay />
    </div>
  );
}

export default App;
