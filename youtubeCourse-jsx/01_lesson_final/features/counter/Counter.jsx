import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const resetAll = () => {
        setInputValue(0);
        dispatch(reset());
    }
    
    return (
        <div>

            <h1>redux toolkit quick start</h1>
            <p>{count}</p>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={resetAll}>reset</button>

            <input value={inputValue} onChange={(e) => setInputValue(+e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(inputValue))}>Add Amount</button>
        </div>
    )
}

export default Counter