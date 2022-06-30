import React from 'react'
import { getSession } from 'next-auth/react'

function blogAuth({data}) {
    const session =  getSession()
    console.log(session)
  return (
    <div>
    <h1>BLOG AUTHENTICATION</h1>

  <h3>
    here= {data}
  </h3>
    
    </div>
  )
}

export default blogAuth

export async function getServerSideProps(context){
    const session = await getSession(context)
    console.log(session)

    if (!session) {
        return{
            redirect:{
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blogAuth`,
                permanent:false
            }
        }
        
    }


    return{
        props:{
            data:session? 'List of 100 personalixed blog ' : 'list of free blog'
        }
    }

}