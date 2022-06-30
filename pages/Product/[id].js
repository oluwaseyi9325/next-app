import { useRouter } from 'next/router'
import React from 'react'

function Params() {
    
     const route=useRouter()
     const { id } = route.query;



  return (
    <div>Params {id} is here</div>
  )
}

export default Params