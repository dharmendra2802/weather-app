import logo from './logo.svg';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Input from './components/Input';
import TimeLocation from './components/TimeLocation';
import TempAndDetail from './components/TempAndDetail';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({ q: 'delhi' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      await getFormattedWeatherData({...query,units }).then(
        (data) => {
          setWeather(data);
        }
      );
    };

    fetchWeather();
  }, [query, units])

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-cyan-500 '>

      <TopButtons setQuery={setQuery}/>
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TempAndDetail weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily}/>
        </div>
      )}
    </div>
  );
}

export default App;
