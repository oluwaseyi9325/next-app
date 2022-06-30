import React from 'react'
import { useRouter } from 'next/router'

function Commerce({blogs}) {
    const routes= useRouter()
    if (routes.isFallback) {
        return <h1>Loading commerce .....</h1>
        
    }
  return (
    <div>
    <h1>BLOG IDS</h1>
     
    
            <div>
         <hr />
          <p>{blogs.id}</p>
          <p>{blogs.name}</p>
          <p>#{blogs.price}</p>
          <hr />
            </div>
    

    </div>
  )
}

export default Commerce

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: { proId:'1' }
            }
        ],
        fallback:true
    }
   
}

export async function getStaticProps(getPrama){
    const { params }= getPrama;
    const response = await fetch(`http://localhost:5000/details/${params.proId}`)
    const data = await response.json();

    if(!data.id){
        return(
            {notFound:true}
        )
    }

    return{
        props:{
        blogs:data
        },
        revalidate:10,
    }
}