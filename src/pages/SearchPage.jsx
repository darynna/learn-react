import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const SearchPage = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()

  const type = searchParams.get('query')

  useEffect(()=> {
    if(!type){
      return
    }
    console.log('Some server request')
  }, [type])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const serachValue = e.target.elements.searchPostId.value
    console.log(serachValue)
    setSearchParams({query: serachValue})
  }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Search by post iD: </p>
                    <input type="text" required name="searchPostId"/>
                </label>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
export default SearchPage;