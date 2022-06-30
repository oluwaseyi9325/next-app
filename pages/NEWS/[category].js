import React from 'react'

function Category({articles,category}) {
  return (
    <div>
      <h1>NEWS Category</h1>

     { articles.map(us=>{
        return(
           <div key={us.id}> 
           <h1>{category}</h1>
           <p>{us.title}</p>
           <p>{us.story}</p>
          <hr />
         </div>
        )
      })

    }
    </div>
  )
}

export default Category


export async function getServerSideProps(context){
    const { params , req, res ,query}= context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=OLUWASEYi'])
    const { category } = params
   
    const response = await  fetch(`http://localhost:5000/news?title=${category}`)
    const data= await response.json()


    return{
        props:{
            articles:data,
            category,
        }
    }
}