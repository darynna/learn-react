import { Component } from "react";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component{
    state={
        pokemonName: ''
    }

    hangleNameChange = e =>{
        this.setState({pokemonName: e.currentTarget.value.toLowerCase()})
    };

    handleSubmit = e =>{
        e.preventDefault()

        if(this.state.pokemonName.trim() === ''){
            return toast.error("Write name of pokemon")
        }

        this.setState({pokemonName: ''})
        this.props.onSubmit(this.state.pokemonName)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="pokemonName"
                value={this.state.pokemonName}
                onChange={this.hangleNameChange}
                />
                <button type="submit">Find</button>
            </form>
        )
    }
}