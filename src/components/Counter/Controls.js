import React from "react";

const Controls = ({onIncreament, onDecreament}) => {
    return <div className="Counter_controls">
    <button type="button" onClick={onIncreament}>Increase by 1</button>
    <button type="button" onClick={onDecreament}>Decrease by 1</button>
</div>
}

export default Controls