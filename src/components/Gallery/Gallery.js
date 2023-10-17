import { useParams } from "react-router-dom"

const Gallery =()=>{
 const {dog} = useParams()
 return <div>Image gallery: {dog}</div>
}

export default Gallery