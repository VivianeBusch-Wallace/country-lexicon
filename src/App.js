import "./components/Loading";
import "./components/CountriesOutput";

function App() {
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={userInput}
          placeholder="Type a country name"
        />
        <button type="submit">Search</button>
      </form>
      <CountriesOutput className="results" />
    </div>
  );
}

export default App;
