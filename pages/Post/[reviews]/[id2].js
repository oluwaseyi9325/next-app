import React from 'react'
import { useRouter } from 'next/router'

export default function IdsHere() {
    const router =useRouter()
    const { reviews,id2 }=router.query
  return (
    <div>
      <h1>hello {reviews} and {id2}</h1>
    </div>
  )
}
