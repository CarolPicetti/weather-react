import './App.css';
import SearchEngine from './SearchEngine'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="app-container">
        <h1>Weather App</h1>
      <SearchEngine />
         <a
          className="App-link"
          href="https://github.com/CarolPicetti"
          target="_blank"
          rel="noopener noreferrer"
        >
           Coded by Carolina Picetti
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
