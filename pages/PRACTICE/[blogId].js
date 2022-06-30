import React from 'react'
import { useRouter } from 'next/router'

function PracticeBlog({blogs}) {
    const router= useRouter()
     if(router.isFallback){
        return <h1>IS LOADING</h1>
     }

  return (
    <div>
   <h1>BLOGS PRACTICES</h1>

    <div style={{backgroundColor:'grey',color:"white"}}>
      <p>{blogs.id}</p>
      <hr/>
      <p>{blogs.body}</p>
      <br />
      <p>{blogs.title}</p>
      <br />
    </div>
    
    </div>
  )
}

export default PracticeBlog



export async function getStaticPaths(){

      const res = await fetch('http://localhost:5000/post');
      const dat= await res.json()

      const paths= dat.slice(0,5).map(blogPaths=>{
        return{
            params: {blogId: `${blogPaths.id}`}
        } 
      })


    return{
       paths,
       fallback:true
    }
}


export async function getStaticProps(getContextParams){
    const { params } = getContextParams;
     const response= await fetch(`http://localhost:5000/post/${params.blogId}`)
     const data = await response.json()

     if(!data.id){
        return{
            notFound:true,
        }
     }

     return{
        props:{
            blogs:data
        }
     }
} 