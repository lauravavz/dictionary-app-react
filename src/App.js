import './App.css';
import logo from "./app-logo.png"
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
     <img src={logo} className="App-logo" alt="app logo"/>
      </header>
      <main>
        <Dictionary />
      </main>
      </div>
    </div>
  );
}

export default App;
