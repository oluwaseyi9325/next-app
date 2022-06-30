import React,{ useEffect,useRef } from 'react'
import Footer from './Product/Footer';
import NavBar from './Product/NavBar';
import { useToast,Button,Stack } from '@chakra-ui/react'


function About() {
  const toast = useToast()
   const isMounted=useRef()
  console.log(process.env.DB_USER)
  useEffect(()=>{
    // if(isMounted.current) return;
     console.log('hello fsfjsd')
    //  console.log(process.env.DB_USER)
    //  isMounted.current=true;
  },[])

  return (
    <div>
    
      <h1>ABOUT</h1>
      <Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>
      <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  <p>My about page here hhh  sjksjs iff id jjj {process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </div>
  )
}

export default About

About.getLayout= function getLayout(pages){
  return(
    <>
    {pages}
    <NavBar/>
    </>
  )
}

// export async function getStaticProps(){
//   const user= process.env.DB_USER;
//   console.log(`seyi ${user}`)
//   return{
//    props:{

//    }
//   }
// }


// About.getLayout = function PageLayout(page){
//   return(
//     <>
//      {page}
//      <Footer />
//     </>
//   )
// }