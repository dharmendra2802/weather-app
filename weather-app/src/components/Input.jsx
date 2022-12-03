import React, { useState } from 'react'
import {UilSearch , UilLocationPoint} from "@iconscout/react-unicons"
function Input({setQuery , units , setUnits}) {
 
  const [city,setCity] = useState("");

  const handleSearch = () => {
    if(city !== '') setQuery({q: city})
  }

  const handleloco = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  }

  const handleUnit = (a) => {
    const selectedUnit = a.currentTarget.name;
  //  console.log(selectedUnit);
    if(units !== selectedUnit) setUnits({selectedUnit});
  
    //console.log(units)
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='ml-10 flex flex-row w-3/4 items-center justify-center space-x-2'>
            <input 
            value= {city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text" 
            className="text-md font-light p-2 w-full shadow-xl focus:outline-none capitalize" 
            placeholder='Search for cities..... '
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out  hover:scale-125" 
            onClick={handleSearch} />
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleloco}/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric"
            className='ml-2 text-xl text-white font-light hover:scale-110'
            onClick={handleUnit}>
               &deg;C 
            </button>
            <p className='text-xl ml-2 mr-2 text-white mx-1'>|</p>
            <button name="imperial"
            className='text-xl text-white font-light hover:scale-110'
            onClick={handleUnit}>
               &deg;F 
            </button>
        </div>

    </div>
  )
}

export default Input