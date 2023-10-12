import { useParams } from "react-router-dom"

export const Gallery =()=>{
 const {dog} = useParams()
 return <div>Image gallery: {dog}</div>
}