import React, { useState, useEffect, useReducer } from "react";
import "./Counter.css"
import Controls from "./Controls";


// export default function Counter(){
//     const [counterA, setCounterA] = useState(0);
//     const [counterB, setCounterB] = useState(0);

//   const handleIncreament = ()=>{
//     setCounterA(prevState => prevState + 1)
//   }
//   const handleDecreament = ()=>{
//     setCounterB(prevState => prevState - 1)
//   }

//   useEffect(()=> {
//     const total = counterA + counterB
//    document.title = `Total ${total}`
//   }, [counterA, counterB])
//     return(
//      <div className="Counter">
                   
//                    <Controls onIncreament={handleIncreament} onDecreament={handleDecreament} timesA={counterA} timesB={counterB}/>
//                </div>
//     )
// }

function countReducer(state, action){
  switch(action.type){
    case 'increment':
      return {...state, count: state.count + action.payload}
      case 'decrement':
        return {...state, count: state.count - action.payload}
      default:
        throw new Error("error")  
  }

}

export default function Counter(){
    // const [counterA, setCounterA] = useState(0);
    // const [counterB, setCounterB] = useState(0);
    const [state, dispatch] = useReducer(countReducer, {count: 0})

  const handleIncreament = ()=>{
    // setCounterA(prevState => prevState + 1)
    dispatch({type: 'increment', payload: 1})
  }
  const handleDecreament = ()=>{
    dispatch({type: 'decrement', payload: 1})
  }

  // useEffect(()=> {
  //   const total = counterA + counterB
  //  document.title = `Total ${total}`
  // }, [counterA, counterB])
    return(
     <div className="Counter">
                   
                   <Controls onIncreament={handleIncreament} onDecreament={handleDecreament} total={state.count}
                   />
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