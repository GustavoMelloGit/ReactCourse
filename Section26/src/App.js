import Greeting from "./components/Greeting";
import "./App.css";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Async />
      </section>
    </div>
  );
}

export default App;
