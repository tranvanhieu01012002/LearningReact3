import React, { useState } from 'react';

function CheckBox(props) {

    const [state,setState] =useState({
        name: "hieu"
    })
    const handleIncrease = ()=>{
        setState({
            ...state,
            age:"30"})
    }
    return (
        <div>
            <h1>{JSON.stringify(state)}</h1>
            <button onClick={handleIncrease}>incresa</button>
        </div>
    );
}

export default CheckBox;