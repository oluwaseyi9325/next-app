import React,{useState,useEffect} from 'react'
import { signIn, signOut ,useSession, getSession  } from 'next-auth/react'
function Dash() {
    // const { data: session , status} = useSession()
    // console.log({session,status})
    const [loading,setLoading]=useState(true)
   useEffect(()=>{

    const securePage=async()=>{
        const session = await getSession()

        if (!session) {
            signIn()
        }else{
            setLoading(false)
        }
    }
    securePage()

   },[])

   if (loading) {
    return <h1>Loading ......</h1>
   }

  return (
    <div>
    
     <h1>Dashboard PAGE</h1>
    
    </div>
  )
}

export default Dash