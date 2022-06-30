import React from 'react'

function BlogId({blogs}) {
  return (
    <div>
    <h1>BLOG IDS</h1>
     
    
            <div>
         <hr />
          <p>{blogs.id}</p>
          <p>{blogs.title}</p>
          <p>{blogs.body}</p>
          <hr />
            </div>
    

    </div>
  )
}

export default BlogId

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: { blogsId:'1' }
            },
            {
                params: { blogsId:'2' }
            },
            {
                params: { blogsId:'3' }
            },
            {
                params: { blogsId:'4' }
            }
        ],
        fallback:false
    }
   
}

export async function getStaticProps(getPrama){
    const { params }= getPrama;
    const response = await fetch(`http://localhost:5000/post/${params.blogsId}`)
    const data = await response.json();

    return{
        props:{
        blogs:data
        }
    }
}