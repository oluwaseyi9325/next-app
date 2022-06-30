import { useRouter } from 'next/router'
import React from 'react'

function Post({post}) {
    const route=useRouter()

    if (route.isFallback) {
        return <h1>Is loading ....</h1>
    }

  return (
    <div>
     
    <h2>
     {post.id }- {post.title}
    </h2>
    <p>{post.body }</p>
    
    </div>
  )
}

export default Post

export async function getStaticPaths(){
    const response = await fetch(`http://localhost:5000/post`)
    const data = await response.json()

    const paths= data.map(val=>{
        return{
            params:{
                postIDS: `${val.id}`
            }
        }
    })

   

    return{
       paths ,
        fallback:false,
    }
}

// export async function getStaticPaths(){
//     return{
//         paths:[
//            {
//             params:{postIDS:'1'}
//            },
//            {
//             params:{postIDS:'2'}
//            },
//            {
//             params:{postIDS:'3'}
//            }
//         ],
//         fallback:true,
//     }
// }

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`http://localhost:5000/post/${params.postIDS}`)
    const data = await response.json()

    console.log(`generating page for /PostSSS/${params.postIDS}`)

    if(!data.id){
        return{
            notFound:true
        }
    }

    return{
        props:{
            post:data
        }
    }
}