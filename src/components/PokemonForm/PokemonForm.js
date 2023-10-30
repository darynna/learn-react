import { useState } from "react";
import { toast } from 'react-toastify';

export default function PokemonForm({onSubmit}) {

    const [pokemonName, setPokemonName]=useState('')

    const hangleNameChange = e =>{
        setPokemonName(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = e =>{
        e.preventDefault()

        if(pokemonName.trim() === ''){
            return toast.error("Write name of pokemon")
        }

        setPokemonName('')
        onSubmit(pokemonName)
    }

    console.log(pokemonName)
 
        return(
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="pokemonName"
                value={pokemonName}
                onChange={hangleNameChange}
                />
                <button type="submit">Find</button>
            </form>
        )
}