import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const handleFetch = () => {
    axios.get("/api/getUser").then((res) => {
      alert(JSON.stringify(res.data));
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello from Docker!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button onClick={handleFetch}>Fetch user</button>
      </header>
    </div>
  );
}

export default App;
