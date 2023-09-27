import { Component } from "react";

export default class Clock extends Component{
    state ={
        time: new Date().toLocaleDateString()
    };

    intervalId = null;

    componentDidMount(){
        console.log("setinterval")

         this.intervalId = setInterval(
            () => this.setState({time: new Date().toLocaleTimeString()}), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return <div>{this.state.time}</div>
    }
}