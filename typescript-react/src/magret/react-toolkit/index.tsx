import { useAppSelector , useAppDispatch } from "./hooks"
import { increment , decrement , reset , setStatus } from "./counterSlice"



const Component = () => {

    const {count , status} = useAppSelector(state=>state.counter)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>React tool kit</h1>
            <h2>Count : {count}</h2>
            <h2>Status : {status}</h2>
            <hr />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <hr />
            <button onClick={()=>dispatch(setStatus("active"))}>Set Status to Inactive</button>
            <button onClick={() => dispatch(setStatus("inactive"))}>Set Status to Active</button>
            <hr />
        </div>
    )
}

export default Component
