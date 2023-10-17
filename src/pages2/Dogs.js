import { useState } from "react"

const { Link, useSearchParams, useLocation } = require("react-router-dom")


const Dogs = ()=>{
    const [dogs, setDog] = useState([
        'dog-1', 'dog-2', 'dog-3'
    ])
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    const dogId =  searchParams.get('dog') ?? ''

    const updatequerystring = e =>{
        if(e.target.value === ''){
            return setSearchParams(setSearchParams({}))
            
        }
       setSearchParams({dogId: e.target.value})
    }

    const visibleDog = dogs.filter(dog => dog.includes(dogId))
    return(
        <div>
            <input value={dogId} type="text" onChange={updatequerystring}/>
            <button onClick={()=> setSearchParams({c: 'hello'})} type="button">change sp</button>
            {visibleDog.map(dog=>{
                return(
                    <Link key={dog} to={dog} state={{from: location}}>{dog}</Link>
                )
            })}
        </div>
    )
}

export default Dogs