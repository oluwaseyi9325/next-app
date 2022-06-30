import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
// const fetcher = async()=>{
//     const response = await fetch('http://localhost:5000/dashboard')
//     const data = await response.json()
//     return data
// }


function SwrDah() {
   
  const { data, error,mutate } = useSWR('http://localhost:5000/dashboard',
  
  {
    // revalidateOnFocus:false,
    // refreshInterval:1000,
    
  }   

  )
  if(error) return 'An error has Occured'
  if(!data) return 'Loading'
  return (
    <div>
    
    <h2>Dashboard--SWR....</h2>
    <button onClick={()=>mutate()}>Refresh</button>
    <h2>Post -- {data.posts}</h2>
    <h2>Liikes -- {data.likes}</h2>
    <h2>Folowers -- {data.followers}</h2>
    <h2>Following -- {data.following}</h2>
    
    </div>
  )
}

export default SwrDah