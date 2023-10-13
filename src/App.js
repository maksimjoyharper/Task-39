import "./App.css";
import { Count } from "./components/Counter";
import { Clock } from "./components/Time";
import { Greeting } from "./components/Greeting";

function App() {
  document.title = "MyReactApp";
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Rostik" key={1} />
        <Greeting name="Maks" key={2} />
        <Count />
        <Clock />
      </header>
    </div>
  );
}

export default App;
