import { useEffect, useState, useRef } from "react";


export default function Clock(){
    const [time, setTime] = useState(() => new Date());

    const intervalId = useRef(null);

    useEffect(()=> {
        intervalId.current = setInterval(() => {
            setTime(new Date())
        }, 1000);
    }, []) 


    const stop = () => {
        clearInterval(intervalId.current);
      };
    

    return(
        <div>
            <p>
                Time: {time.toLocaleTimeString()}
            </p>
            <button type="button" onClick={stop}>Stop</button>
        </div>

    )
}


// export default class Clock extends Component{
//     state ={
//         time: new Date().toLocaleDateString()
//     };

//     intervalId = null;

//     componentDidMount(){
//         console.log("setinterval")

//          this.intervalId = setInterval(
//             () => this.setState({time: new Date().toLocaleTimeString()}), 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.intervalId)
//     }

//     render(){
//         return <div>{this.state.time}</div>
//     }
// }


