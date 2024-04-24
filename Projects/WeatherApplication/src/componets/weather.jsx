import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import 'react-bootstrap'
import './weatherStyle.css'



export default function Weather() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false
    });

    const toDataFunction = () => {
        const months = ['January','February','March','April','May','June',
        'July','August','September','October','November','December'];

        const WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const currentDate = new Date();

        const date = `{${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}}`
        return date;
    }

    const search = async(e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            setInput('');
            setWeather({...weather, loading:true});
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            await axios.get(url, {
                params:{
                    q: input,
                    units: 'metric',
                    appid: api_key
                },
            })
            .then((res)=>{
                console.log('Response : ',res);
                setWeather({data:res.data, loading:false, error:false});
            })
            .catch((error) => {
                setWeather({...weather, loading:false, error:true});
                setInput('');
                console.log('Error : ',error);
            })
        }
    }

    // const apikey = 'a388bae9ea866843bc1c953225f3e431';




    return (
        <>
            <div className="box" style={{'background': 'linear-gradient(49deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
                    <h2>Weather Report</h2>
                    <form action="">
                        <div className="inputBox">
                            <input type="text" onChange={(e)=>setInput(e.target.value)} onKeyDown={search} name="" required="" placeholder='Enter City'/>
                            <label htmlFor="">Your Location</label>
                        </div>
                            {/* <input onClick={handleSubmit} type="submit" name="" value="Submit"  style={{'width':'20%','padding':'10px','backgroundColor':'teal'}}/> */}

                    </form>



                    {weather.loading && (
                        <> <br /><br />
                            <Oval type="Oval" color='black' height={80} width={80} />
                        </>
                    )}
                    {
                        weather.error && (
                            <><br /><br />
                                <span className='error-message'>
                                    <FontAwesomeIcon icon={faFrown} />
	            					<span style={{ fontSize: '20px' }}>City not found</span>
                                </span>
                            </>
                        )
                    }
                    {
                        weather && weather.data && weather.data.main && (
                            <div>
                                <div className="city-name text-light " >
                                    <h2>{weather.data.name}, <span>{weather.data.sys.country}</span></h2>
                                </div>
                                <div className="date text-light">
                                    <span>{toDataFunction()}</span>
                                </div>
                                <div className="icon text-light">
                                    <img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt={weather.data.weather[0].description} />
                                    {Math.round(weather.data.main.temp)}
                                    <sup className='deg'>°C</sup>
                                </div>
                                <div className="des-wind text-light">
                                    <p>{weather.data.weather[0].description.toUpperCase()}</p>
                                    <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                                </div>
                            </div>
                        )
                    }
            </div>
        </>
    );
}
