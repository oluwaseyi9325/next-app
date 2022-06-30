import Link from 'next/link'
import React from 'react'

function News({articles}) {
  return (
    <div>
       <h1>LIST OF NEWS</h1>
      
       <Link className='btn btn-info' href={'/NEWS/events?category=sports'}><a>GO TO READ NEWS</a></Link>

       {
        articles.map(newsLetter=>{
            return(
               <div key={newsLetter.id}>
               <p>{newsLetter.id}</p>
                 <p>{newsLetter.title}</p>
                 <p>{newsLetter.story}</p>
                 <hr /> 
               </div>
            )
        })
       }
    </div>
  )
}

export default News

export async function getServerSideProps(){
    const response = await  fetch('http://localhost:5000/news')
    const data= await response.json()


    return{
        props:{
            articles:data
        }
    }
}