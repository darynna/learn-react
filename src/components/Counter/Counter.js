import React, { useState, useEffect } from "react";
import "./Counter.css"
import Controls from "./Controls";


export default function Counter(){
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

  const handleIncreament = ()=>{
    setCounterA(prevState => prevState + 1)
  }
  const handleDecreament = ()=>{
    setCounterB(prevState => prevState - 1)
  }

  useEffect(()=> {
    const total = counterA + counterB
   document.title = `Total ${total}`
  }, [counterA, counterB])
    return(
     <div className="Counter">
                   
                   <Controls onIncreament={handleIncreament} onDecreament={handleDecreament} timesA={counterA} timesB={counterB}/>
               </div>
    )
}

// class Counter extends React.Component{

//     static defaultProps = {
//         initialvalue: 0
//     }


//     state = {
//         value: this.props.initialvalue
//     }

//     handleIncreament = (event) => {
//         this.setState((prevState) => {
//             return {value: prevState.value + 1}
//         })
//     };

//     handleDecreament = () => {
//         this.setState((prevState) => {
//             return {value: prevState.value - 1}
//         })
//     }

//     render(){
//         return <div className="Counter">
//             <span className="Counter_value">{this.state.value}</span>

//             <Controls onIncreament={this.handleIncreament} onDecreament={this.handleDecreament}/>
//         </div>
//     }
// }


// export default Counter