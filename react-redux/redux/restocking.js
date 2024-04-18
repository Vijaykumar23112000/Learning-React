const redux = require("redux")
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return { ...state, numOfCakes: state.numOfCakes - 1 }
        case CAKE_RESTOCKED:
            return { ...state, numOfCakes: state.numOfCakes + action.payload }
        default: return state
    }
}

const store = createStore(reducer)
console.log("Initial State : ",store.getState())

const unsubscribe = store.subscribe(()=>console.log("Updated State : ",store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake(5))
store.dispatch(restockCake(5))
store.dispatch(restockCake(5))
store.dispatch(restockCake(5))
store.dispatch(restockCake(5))

unsubscribe()