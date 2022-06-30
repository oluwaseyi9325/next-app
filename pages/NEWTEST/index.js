// import { getStaticProps } from 'pages/userStatic'
import React from 'react'

function Static({users}) {
  return (
    <div>
     
    <h1>Users List</h1>
   
    <div>
      {users.map((us,i)=>{

        return(
            <div key={i}>
                <p>{us.id}</p>
                <p>{us.title}</p>
                <hr />
            </div>
        )

      })}
    </div>

     
    </div>
  )
}

export default Static

export async function getStaticProps (){
  const response = await fetch('http://localhost:5000/post');
  const data = await response.json();
 
  return{
    props:{
        users:data
    }
  }

}