import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function UseEffectRender() {
    const [isloading, setLoading]=useState(true)
    const [details,setDetails]=useState({})

   const isMounted= useRef()


   

      


       const btn=()=>{
        axios.get('http://localhost:5000/dashboard').then((response)=>{
            console.log(response.data)
             setDetails(response.data),
             setLoading(false)
        }).catch((error)=>{
                console.log(error.message)
        })
      
       }

    useEffect(()=>{
        // async function GetData(){
        //     const response = await fetch('http://localhost:5000/dashboard')
        //     const data = await response.json()
    
        //     setDetails(data)
        //     setLoading(false)
        
        // }
       
        // GetData()
        axios.get('http://localhost:5000/dashboard').then((response)=>{
            console.log(response.data)
             setDetails(response.data)
            //  setLoading(false)
        }).catch((error)=>{
                console.log(error.message)
        })

 
    },[])

    // if (isloading) {
    //     return <h1>Is loading</h1>
        
    //   }


  return (
    <div>

    <h1>AWAIT GET DETAILS</h1>
    <h2>Post -- {details.posts}</h2>
    <h2>Liikes -- {details.likes}</h2>
    <h2>Folowers -- {details.followers}</h2>
    <h2>Following -- {details.following}</h2>
    
   
    </div>
  )
}

export default UseEffectRender