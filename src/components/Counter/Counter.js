import React from "react";
import "./Counter.css"
import Controls from "./Controls";

class Counter extends React.Component{

    static defaultProps = {
        initialvalue: 0
    }


    state = {
        value: this.props.initialvalue
    }

    handleIncreament = (event) => {
        this.setState((prevState) => {
            return {value: prevState.value + 1}
        })
    };

    handleDecreament = () => {
        this.setState((prevState) => {
            return {value: prevState.value - 1}
        })
    }

    render(){
        return <div className="Counter">
            <span className="Counter_value">{this.state.value}</span>

            <Controls onIncreament={this.handleIncreament} onDecreament={this.handleDecreament}/>
        </div>
    }
}


export default Counter