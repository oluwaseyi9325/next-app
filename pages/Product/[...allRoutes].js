import { useRouter } from 'next/router'
export default function AllRoutehere(){
    const router=useRouter()
    const { allRoutes } =router.query
    console.log(allRoutes)
    return(
        <div>

        <h1>Alll rourers page hhhh </h1>
           
        </div>
    )
}