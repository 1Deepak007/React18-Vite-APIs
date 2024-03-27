import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import {Card} from 'react-bootstrap'


export default function Github() {
    //const [data, setData] = useState();
    // Calling API to get github followers when component loads using useEffect. It runs when comp. loads
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/1Deepak007')
    //     .then(response => response.json())
    //     .then(data=>{
    //       console.log(data);
    //       setData(data);
    //       console.log(data.followers);
    //       console.log(data.name);
    //     })
    // },[])

    const data = useLoaderData();
    console.log(data);


  return (
    <>
      <h1 className='text-center underline'>GitHub Followers</h1>
        <div className="bg-sky-400">
          <div className="card-body text-center">
            <h2>Github UserName : {data?.name}</h2>
            <h2>Github Followers : {data?.followers}</h2>
            <h2>Github Public Repos. : {data?.public_repos}</h2>
          </div>
        </div>
    </>
  )
}

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/1Deepak007');
  return response.json();
}

