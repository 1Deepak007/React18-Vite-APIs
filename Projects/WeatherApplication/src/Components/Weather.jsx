import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import 'react-bootstrap'


import { ArrowRight } from 'lucide-react'



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
        
        <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Weather Forecast</h2>
            
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Enter Location {' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Location"
                    ></input>
                  </div>
                </div>
                <div>
                  
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get Weather Data <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://source.unsplash.com/random/?query=weather/800x600"
            alt=""
          />
        </div>
      </div>
    </section>


    );
}
