import { useReducer } from "react"
import { initialState, counterReducer } from "./reducer"

const Component = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)


    return (
        <div>
            <h1>Use Reducer</h1>
            <h2>Count : {state.count}</h2>
            <h2>Status : {state.status}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <hr />
            <button onClick={() => dispatch({type:"setStatus" , payload:"active"})}>Set Status to Active</button>
            <button onClick={()=>dispatch({type:"setStatus" , payload:"inactive"})}>Set Status to Inactive</button>
        </div>
    )
}

export default Component
