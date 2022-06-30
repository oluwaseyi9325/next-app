import React from 'react'
import Image from 'next/image'

function Pet() {
  return (
    <div>
    
    <h1> PET PAGES HERE</h1>

    {
        [1,2,3,4].map(us=>{
            return(
                <div key={us}>

                <Image src={`/pet${us}.avif`} width={400} height={600} />

                <hr />
                
                </div>
            )
        })
    }
     <Image src={`/pet1.avif`} width={400} height={600} />

    
    
    </div>
  )
}

export default Pet