import { useParams, Link } from "react-router-dom"

const DogDetails =()=>{
    const {dog} = useParams()

    return(
        <><h1>DogDetails: {dog}</h1>
        <ul>
            <li>
                <Link to="breeds">Breed</Link>
            </li>
            <li>
                <Link to="gallery">Gallery</Link>
            </li>
        </ul>
        </>
    )
}

export default DogDetails