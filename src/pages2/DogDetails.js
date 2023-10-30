import { useRef, Suspense } from "react"
import { useParams, Link , useLocation, Outlet} from "react-router-dom"

const DogDetails =()=>{
    const location = useLocation()
    const backLinkLocation = useRef(location.state?.from ?? '/dogs')
    const {dog} = useParams()
    

    return(
        <><h1>DogDetails: {dog}</h1>
        <Link to={backLinkLocation.current}>Back</Link>
        <ul>
            <li>
                <Link to="breeds">Breed</Link>
            </li>
            <li>
                <Link to="gallery">Gallery</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading....</div>}> <Outlet/></Suspense>
       
        </>
    )
}

export default DogDetails