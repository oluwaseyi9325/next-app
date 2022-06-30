// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import NavBar from './Product/NavBar'
import { signIn, signOut ,useSession  } from 'next-auth/react'




export default function Home() {
  // const getStore=useSelector((state=>state))
  const { data: session , status} = useSession()
   console.log({session,status})
  return (
    <div >
     <NavBar />
    <Link href='/dash'><a>Go to dashboard</a></Link>
     <hr/>
     <Link href='/blogAuth'><a>Go to AUTH-BLOG page</a></Link>
     <hr/>
      <h3>Username-github{session ? `${session.user.name}`:''}</h3>
      <h3>Email-github---{session ? `${session.user.name}`:''}</h3>
     <hr/>
     <div>
      {
       !session && (
        <Link  href='/api/auth/signin'><a className='btn btn-info' onClick={(e)=>{
          e.preventDefault() , signIn('github')
        }} >SIGN-IN</a></Link>
       )
      }

      <br /> <br />

     

      {
        session && (
          <Link  href='/api/auth/signout'><a onClick={(e)=>{
            e.preventDefault() , signOut()
          }} className='btn btn-warning'>SIGN-OUT</a></Link>
        )
      }


     </div>
       <hr />
      <h1 className='bg'>HOMEAGE sdghfsdfh</h1>
      <p className='btn btn-danger'>My home page is here hhh mmm</p>

      <h3> oluwaseyi is here now</h3>
      
      <div>
       
        
      </div>
    </div>
  )
}

Home.getLayout = function PageLayout(page){
  return(
    <>
     {page}
    <NavBar/>
    </>
  )
}
