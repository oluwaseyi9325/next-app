import Link from 'next/link'
import React from 'react'

function Blogs({blogs}) {
  return (
    <div>
    
    
    <h1>BLOG PAGE </h1>

    {blogs.map((us,i)=>{
        return(
            <div key={i}>
            <p>{i+1}</p>
            <Link href={`/NEWTEST/BLOGS/${us.id}`} passHref ><a>
            <p>{us.title}</p>
            </a></Link>
            
           
            <hr />
            </div>
        )
    })}

    </div>
  )
}

export default Blogs



export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/post')
    const data = await response.json()

    return{
        props:{
            blogs:data.slice(0,3)
        }
    } 
}