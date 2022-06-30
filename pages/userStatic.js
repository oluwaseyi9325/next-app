// import React from 'react'
// import UserDetails from './userDetails'

import axios from "axios"
import { useState } from "react"
import NavBar from "./Product/NavBar"

export default function UserStatic({userList}) {
 
  return (
    <div className='text-center'>
    
   <h1>
     static props ade wale
   </h1>
  <h2>CHNAGE API DATAS here class 29 </h2>
    {userList.map((val,i)=>{
       return(
        <div key={i}>
        <p>{val.id}</p>
        <p>{val.title}</p>
        <hr />
       </div>
       )
    })}
    
    </div>
  )
}

UserStatic.getLayout= function getLayout(pages){
  return(
    <>
    {pages}
   <NavBar />
    </>
  )
}

export async function getStaticProps(){
  // let dat=[];
  // axios.get('http://localhost:5000/post').then(response=>
  // dat=response.data)
    const response = await fetch('http://localhost:5000/post')
    const data=  await response.json()
    console.log(data)

    return{
        props:{
            userList:data.slice(0,10)
        }
    }
}