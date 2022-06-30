import Link from 'next/link'
import React from 'react'

function Com({blogs}) {
  return (
    <div>
    
    
    <h1>BLOG PAGE HERE </h1>

    {blogs.map((us,i)=>{
        return(
            <div key={i}>
            <p>{i+1}</p>
            <Link href={`/CHANGEDATA/${us.id}`} passHref ><a>
            <p>{us.name} = {us.price}</p>
            </a></Link>
            
           
            <hr />
            </div>
        )
    })}

    </div>
  )
}

export default Com



export async function getStaticProps(){
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('http://localhost:5000/details')
    const data = await response.json()

    return{
        props:{
            blogs:data.slice(0,3)
        },
        revalidate:10
    } 
}