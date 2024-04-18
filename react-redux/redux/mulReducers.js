const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"


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

function orderIcecream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

function restockIcecream(qty) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return { ...state, numOfCakes: state.numOfCakes - 1 }
        case CAKE_RESTOCKED:
            return { ...state, numOfCakes: state.numOfCakes + action.payload }
        default: return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return { ...state, numOfIcecreams: state.numOfIcecreams - 1 }
        case ICECREAM_RESTOCKED:
            return { ...state, numOfIcecreams: state.numOfIcecreams - action.payload }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)
console.log("Initial State : ", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State : ", store.getState()))

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch)

actions.orderCake()
actions.restockCake(5)

actions.orderIcecream()
actions.restockIcecream(20)

unsubscribe()