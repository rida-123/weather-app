import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import WeatherData from './components/weatherdata/weatherdata';
function App() {
  return (
    <div className="App">
      <Searchbar/>
      <WeatherData/>
    </div>
  );
}

export default App;
