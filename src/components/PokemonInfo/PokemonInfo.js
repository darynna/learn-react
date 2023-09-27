import { Component } from "react";
import PokemonPendingView from "components/PokemonPendingView/PokemonPendingView";
import PokemonAPI from "components/services/PokemonAPI";

export default class PokemonInfo extends Component{
    state={
        pokemon: null,
        error: null,
        status: 'idle'

    }

    componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.pokemonName
        const nextName = this.props.pokemonName
        if(prevName !== nextName){
            this.setState({status: "pending"})

            PokemonAPI.fetchPokemon(nextName)
            .then(pokemon => this.setState({pokemon, status: 'resolved'}))
            .catch(error => this.setState({error, status: "rejected"}))
            .finally(() => this.setState({loading: false}))
        }
    }

    render(){
        const {pokemon,error, status} = this.state
        
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
                src={pokemon.sprites.other['official-artwork'].front_default} 
                alt={pokemon.name}
                width="240"
                />
                </div>)
        }
    }
}