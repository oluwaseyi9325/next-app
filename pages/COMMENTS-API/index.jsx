import React,{useState} from 'react'
import axios from 'axios'

function FetchComments() {
    const [com,setCom]=useState([])
    const [typeCom,setTypecom]=useState('')
    const btn= async ()=>{
        axios.get("/api/NEW-PRACTICE/comments").then(
            response=> setCom(response.data)
        )
        // const response = await fetch('/api/NEW-PRACTICE/comments')
        // const data = await response.json()
        // setCom(data)

    }

    const setBtn= async()=>{

        // axios.post('/api/NEW-PRACTICE/comments',{
        //     body: JSON.stringify({typeCom}),
        //    headers:{
        //       'Content-Type':'application/json'
        //   }
        // }).then(res=>console.log(res))
   
        const response = await fetch('/api/NEW-PRACTICE/comments',{
            method:'POST',
            body: JSON.stringify({typeCom}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data)

    }

    const delBtn= async e=>{
        const response = await fetch(`/api/NEW-PRACTICE/comments/${e}`,{
            method:'DELETE',
         })
         const data = await response.json()
         console.log(data)
        btn()

    }


      return (
    <div>
    FetchComments
    <hr />

<input value={typeCom} onChange={(e)=>setTypecom(e.target.value)} />
    <hr/>

    <button onClick={()=>btn()}>LOAD comments</button>
    <br />

    <button onClick={()=>setBtn()}>Submit comment</button>

    <hr />

  

    <hr/>

    {
        com.map(us=>{
            return(
                <div key={us.id}>

                {us.id}--- {us.text}
                <button onClick={()=>delBtn(us.id)}>DElete comments</button>
                </div>
            )
        })
    }
    
    </div>
  )
}

export default FetchComments