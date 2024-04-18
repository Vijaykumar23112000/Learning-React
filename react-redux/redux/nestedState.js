const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const initialState = {
    name: "Aaron",
    address: {
        street: "123 Main Street",
        city: "Kochi",
        state: "Kerala"
    }
}

const STREET_UPDATED = "STREET_UPDATED"

function updateStreet(street) {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            return {
                ...state, address: {
                    ...state.address,
                    street: action.payload
                }
            }
        default: return state
    }
}


const store = createStore(reducer)
console.log("Initial State : ",store.getState())

const unsubscribe = store.subscribe(()=>console.log("Updated State : ",store.getState()))

const actions = bindActionCreators({updateStreet},store.dispatch)

actions.updateStreet("456 Side Street")
actions.updateStreet("789 Back Street")

unsubscribe()