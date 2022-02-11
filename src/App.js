import "./App.css";

function App() {
  return (
    <div>
      <h1> Selam</h1>
      <img
        className="w-8 dark:bg-gray-600 rounded-full"
        src={require(`./icons/clear-day.svg`)}
        alt="sun"
        title="Light Mode"
      />
    </div>
  );
}

export default App;
