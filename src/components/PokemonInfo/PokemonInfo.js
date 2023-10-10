import { useContext, useEffect, useState } from "react";
import PokemonPendingView from "components/PokemonPendingView/PokemonPendingView";
import PokemonAPI from "components/services/PokemonAPI";
import { DetailsContext } from "components/Context/Details.context";

export default function PokemonInfo({pokemonName}){
   console.log(pokemonName)
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('idle')

    const {todayDate} = useContext(DetailsContext)

    
   useEffect(()=>{

   if(!pokemonName){
    return
   }

    setStatus('pending');
    setPokemon('')

    PokemonAPI.fetchPokemon(pokemonName)
            .then(pokemon => {
            setPokemon(pokemon)
            setStatus('resolved')})
            .catch(error => {
                setError(error)
                setStatus('rejected')
            })

   }, [pokemonName])
   console.log(pokemon)
        
        if(status === "idle"){
            return <div>Write pokemon name</div>
        }

        if(status==='pending'){
            return  <PokemonPendingView/>
        }

        if(status === "rejected"){
            return (<h1>{error.message}</h1>)
        }

        if(status === 'resolved'){
            return(
            <div>
                <p>{pokemon.name}</p>
                <img 
                src={pokemon.sprites.front_default} 
                alt={pokemon.name}
                width="240"
                />
                <p>{todayDate}</p>
                </div>
                )
        
    }
}