import React, { useState, useEffect} from 'react'

function Dashboard() {
    const [isloading, setLoading]=useState(true)
    const [dash,setDash]=useState(null)

    useEffect(()=>{
        async function FetchData(){
        const response = await fetch('http://localhost:5000/dashboard')
        const data = await response.json()
       
        setDash(data)
        setLoading(false)
        }
        FetchData()
    },[dash])

  
  if (isloading) {
    return <h1>Is loading</h1>
    
  }

  return (
    <div>
    <h2>Dashboard</h2>
    <h2>Post -- {dash.posts}</h2>
    <h2>Liikes -- {dash.likes}</h2>
    <h2>Folowers -- {dash.followers}</h2>
    <h2>Following -- {dash.following}</h2>
    </div>
  )
}

export default Dashboard