import React from 'react'

function News({newsList}) {
  return (
    <div>
      <h1>SERVER NEWS LIST</h1>



      {
        newsList.map(us=>{
            return(
                <div key={us.id}>
                 <p>{us.id}</p>
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

export default News



export async function getServerSideProps(){

    const response = await fetch('http://localhost:5000/news')
    const data = await response.json()

    return{
        props:{
            newsList:data
        }
    }

}