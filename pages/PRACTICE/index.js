import Link from 'next/link';
import React from 'react'

function IndexPage({blogs}) {
  return (
    <div>

    <h1>PRACTICE INDEX PAGE HERE</h1>

    {
        blogs.map(us=>{
           return(
          <div key={us.id}>
            <p>{us.id}</p>

            <Link href={`/PRACTICE/${us.id}`}><a><p>{us.title}</p></a></Link>
            
           
            <hr />
          </div>
           )
        })
    }
    
    </div>
  )
}

export default IndexPage

export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/post');
    const data = await response.json();

    return{
        props:{
            blogs:data.slice(0,15)
        }
    }
}