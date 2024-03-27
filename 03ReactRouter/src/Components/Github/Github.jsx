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
        <div className="bg-primary">
          <div className="card-body">
            <h2>Github UserName : {data?.name}</h2>
            <h2>Github Followers : {data?.followers}</h2>
            <h2>Github Public Repos. : {data?.public_repos}</h2>
          </div>
        </div>

    <h1 className='text-center'>GitHub Followers</h1>

        <Card border="warning" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

    </>
  )
}

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/1Deepak007');
  return response.json();
}

