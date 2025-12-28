import { useState } from 'react';
import './App.css';

function App() {
  let [city, setCity] = useState("");
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  let [wDetails, setWDetails] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let getData = (e) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.main.temp);
        if (data.cod === "404") {
          setWDetails(null);
        } else {
          setWDetails(data);
        }
        setIsLoading(false)
      });
    setCity("");
  }
  return (
    <div className='w-[100%] h-[100vh] bg-[#4aacb1]'>

      <div className='max-w-[1320px] mx-auto'>

        <h1 className='text-[40px] font-bold py-[50px] text-white'>Simple weather App</h1>

        <form onSubmit={getData}>

          <input type='text' value={city} onChange={(e) => setCity(e.target.value)} className='w-[300px] h-[40px] p1-3' placeholder='City Name' /> <button className='bg-[#4aacb1] text-white px-4 py-2 rounded-md'>Search</button>

        </form>
        <div className='w-[400px] mx-auto bg-white shadow-1g mt-[40px] p-[25px]' >
          <img src='https://tenor.com/view/huh-question-question-mark-thinking-pondering-gif-16389069782982339852.gif' alt='Loading...'  width={204} className={`absolute left-[60% ${isLoading?'':'hidden'}`}/>
          {wDetails !== null
            ?
            <>
              <h3 className='font-bold text-[30px]'>{wDetails.name}
                <span className='bg-[yellow]'>{wDetails.sys.country}</span> </h3>
              <h2 className='font-bold text-[40px]'>{wDetails.main.temp}°C</h2>
              <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} alt='' />
              <p>{wDetails.weather[0].description}</p>
            </>
            :
            <h2 className='font-bold text-[30px] text-center'>No Data Found</h2>}

        </div>

      </div>
    </div >
  );
}

export default App;
