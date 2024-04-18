// Redux Pattern

const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators


const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

function increment() {
    return {
        type: "INCREMENT",
        payload: 1
    }
}

function decrement(qty = 5) {
    return {
        type: DECREMENT,
        payload: qty
    }
}

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state, count: state.count - action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log("Initial Count : ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated State : ", store.getState()))

const actions = bindActionCreators({ increment, decrement }, store.dispatch)

actions.increment()
actions.increment()
actions.increment()

actions.decrement(5)
actions.decrement(5)
actions.decrement(5)

unsubscribe()