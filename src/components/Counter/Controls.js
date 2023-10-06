import React from "react";

const Controls = ({onIncreament, onDecreament, timesA, timesB, total}) => {
    return <div className="Counter_controls">
    <button type="button" onClick={onIncreament}>Increase</button>
    <button type="button" onClick={onDecreament}>Decrease</button>
    <span>{total}</span>
</div>
}

export default Controls