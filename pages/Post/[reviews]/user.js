// import  Head  from 'next/Head';
import React,{ useEffect,useRef} from 'react'

function User() {
   const isMounted=useRef()
    useEffect(()=>{
    if(isMounted.current) return;
    console.log('adewale')
    isMounted.current=true;

    },[])
  return (
    <div>
    
    user
    
    </div>
  )
}

export default User