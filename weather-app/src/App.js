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

  
  const bgChange = () => {
    if (!weather) return 'bg-main';
    if(weather.temp< 5 )
      return 'bg-snow';
    if(weather.temp>25)
      return 'bg-sunny';
    return 'bg-haze';
  
  }

  return (
    <div className={`w-full h-full ${bgChange()} bg-cover , bg-no-repeat py-5`}>
      <div className='mx-auto  w-3/5 py-5 px-32
      bg-white bg-opacity-20 
      backdrop-blur-xl rounded drop-shadow-lg
      bg-slate-600' >
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
    </div>
  );
}

export default App;
