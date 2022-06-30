// import Category from 'pages/NEWS/[category]'
import React from 'react'

function ParmsacAT({articles, category}) {
  return (
    <div>
     <h1>Category here LIST</h1>

     <input placeholder='enter category' />

     <button className='btn btn-info'>click</button>

       
   {
    articles.map(us=>{
        return(
            <div key={us.id}>

            <p>{us.title}</p>
            <p>{us.story}</p>
            <p>this is the {category}</p>
            <hr />
            
            </div>
        )
    })
   }
    
    </div>
  )
}

export default ParmsacAT

export async function getServerSideProps(context){
    const { params } = context
    const { category } = params;
    const response = await fetch(`http://localhost:5000/news?title=${category}`)
    const data = await response.json()

    

    return{
        props:{
            articles:data,
            category
        }
    }
}


