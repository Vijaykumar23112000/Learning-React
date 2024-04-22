import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "inactive" | "pending"

type CounterState = {
    count: number
    status: CounterStatus
}

const initialState: CounterState = {
    count: 0,
    status: "pending"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        },
        setStatus:(state , action:PayloadAction<CounterStatus>) => {
            state.status = action.payload
        }
    }
})

export default counterSlice.reducer
export const {increment , decrement , reset , setStatus} = counterSlice.actions