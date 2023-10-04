import React from "react";

const Controls = ({onIncreament, onDecreament, timesA, timesB}) => {
    return <div className="Counter_controls">
    <button type="button" onClick={onIncreament}>click {timesA}</button>
    <button type="button" onClick={onDecreament}>click {timesB}</button>
</div>
}

export default Controls