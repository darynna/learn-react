const { useRef } = require("react")

const UseRefComp = ()=>{
    const btnRef = useRef();

    const handleClick = ()=>{
  console.log(btnRef.current)
    }
    return(
        <div>
            <button ref={btnRef} onClick={handleClick}>Click to change userRef value</button>
   
        </div>
    )
}

export default UseRefComp