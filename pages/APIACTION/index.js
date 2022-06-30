import Footer from 'pages/Product/Footer'
import NavBar from 'pages/Product/NavBar'
import React, { useState } from 'react'

function CommentsPage() {

   const [com,setCom]=useState([])
   const [comInput,setComInput]=useState('')
 
   const fetchcomments=async()=>{
       const response = await fetch('api/comments')
       const data = await response.json()
       setCom(data)
    //    console.log(data)
   }

   const btnSubmit= async ()=>{
    const response = await fetch('api/comments',{
        method:'POST',
        body: JSON.stringify({comInput}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    fetchcomments()
   }

  return (
    <div>
      <input type='text' value={comInput} onChange={(e)=>setComInput(e.target.value)} /> <button onClick={()=>btnSubmit()}>Submit to api</button>
      <button onClick={()=>fetchcomments()}>Load comments</button>

     {
       com.map((val,i)=>{
         return(
            <div key={i}>
            {i+1}.. {val.text}
             </div>
         )
       })
     }

    </div>
  )
}

export default CommentsPage

CommentsPage.getLayout= function getLayout(pages){
  return(
    <>
      <NavBar/>
      {pages}
     
    </>
  )
}