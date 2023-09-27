import React from "react";
import { nanoid } from 'nanoid'



class Form extends React.Component{
    state ={ name: "",
    tag: '',
    experience: 'junior',
    lisence: false
};


    handleChange = event =>{
        const {name, value} = event.currentTarget
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)
        this.reset()
    }

    handleLisenceChange =(e) =>{
console.log(e.currentTarget.checked)
this.setState({lisence: e.currentTarget.checked})
    }

    reset =() =>{
        this.setState({name: '', tag: "", lisence: false})
    }


    render(){
        const nameId = nanoid(); // Generate a unique ID for the Name input
    const tagId = nanoid();

   return (<form onSubmit={this.handleSubmit}>
    <label htmlFor={nameId}>Name
        <input type="text" name='name'  value={this.state.name} onChange={this.handleChange}/>
    </label>
    <label htmlFor={tagId}>
        Surname <input type="text" value={this.state.tag} name='tag' onChange={this.handleChange}/>
    </label>

    <p>Level of experience</p>
    <label>
        <input type='radio' name="experience" value="junior" onChange={this.handleChange} checked={this.state.experience === 'junior'}/>Junior
        </label>
    <label>
        <input type='radio' name="experience" value="middle" onChange={this.handleChange} checked={this.state.experience === 'middle'}/>Middle
        </label>
    <label>
        <input type='radio' name="experience" value="senior" onChange={this.handleChange} checked={this.state.experience === 'senior'}/>Senior
        </label>

        <label>
            <input type="checkbox" name="lisence" checked={this.state.lisence} onChange={this.handleLisenceChange}/>Agreed
        </label>

    <button type="submit" disabled={!this.state.lisence}>Submit</button>
</form>)
    }
};

export default Form