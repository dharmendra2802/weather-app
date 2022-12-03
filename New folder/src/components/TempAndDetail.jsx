import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilWind,
    UilTear,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons"
import { formatLocalTime, iconUrlFromCode } from '../services/weatherService'


function TempAndDetail({weather: {
    details,
    icon,
    temp,temp_min,temp_max,
    sunrise,sunset,
    speed,humidity,
    feels_like,timezone
    }
 }) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-800'>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3  w-3/5'>
            <img 
            src={iconUrlFromCode(icon)}
            alt="icon" 
            className='w-20'/>
            
            <p className='text-5xl'> {`${temp.toFixed()}`}&deg;</p>

            <div className='flex flex-col space-y-2 '>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1" />
                    Real feel :
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}`}&deg;</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1" />
                    Humidity :
                    <span className='font-medium ml-1'>{`${humidity}%`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1" />
                    Wind Speed :
                    <span className='font-medium ml-1'>{`${speed}km/hr`}</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-center items-center space-x-2 text-white text-sm py-3'>

            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>{formatLocalTime(sunrise,timezone,"hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>{formatLocalTime(sunset,timezone,"hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun />
            <p className='font-light'>
                High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}`}&deg;</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun />
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}`}&deg;</span>
            </p>
            
        </div>

    </div>
  )
}

export default TempAndDetail