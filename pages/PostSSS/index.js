import React from 'react'
import Link from 'next/Link'

function PostList({posts}) {
  return (
    <div>

    {

        posts.map((val,i)=>{
            return(
                <div key={val.id}>
                   <Link href={`/PostSSS/${1+i}`} passHref> 
                     <a> <h2>{val.id}.. {val.title}</h2></a>
                   </Link>
                    <hr />
                </div>
            )
        })
    }
    
    
    </div>
  )
}

export default PostList

export async function getStaticProps(){
    const response=await fetch('http://localhost:5000/post')
    const data = await response.json()

    return{
        props:{
          posts:data.slice(0,3)
        }
    }
}
