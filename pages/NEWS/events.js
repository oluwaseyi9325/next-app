import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function EventsSwr({eventList}) {
    const route= useRouter()
    const [int,setInt]=useState(null)

    const [eve,setEve]=useState(eventList)
    const btn = async ()=>{
        axios.get(`http://localhost:5000/events?category=${int}`).then((response)=>{
            setEve(response.data)
        })
        // const response= await fetch(`http://localhost:5000/events?category=sports`)
        // const data = await response.json()
        // setEve(data)
        route.push(`/NEWS/events?category=${int}`,undefined, {shallow:true})
     }
  return (
    <div>

    <input placeholder='type your category here' value={int} onChange={(e)=>setInt(e.target.value)} />

    <button onClick={()=>btn()}>Sports Events</button>
    <hr />
    <h1>Event list here .....</h1>
    
    {
        eve.map(us=>{

            return(
                <div key={us.id}>

                <h2>{us.id} {us.title}|| {us.category}</h2>

                <p>{us.description}</p>

                <hr />

                </div>
            )
        })
    }

    
    </div>
  )
}

export default EventsSwr

export async function getServerSideProps(context){
    const {query}= context;
    const { category } = query;
    const queryString= category ? `category=${category}`:"";''
    const response = await fetch(`http://localhost:5000/events?${queryString}`)
    const data = await response.json()

    return{
        props:{
            eventList:data
        }
    }
}