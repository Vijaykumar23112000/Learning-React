const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')

const cakeReducers = require('../features/cake/cakeSlice')
const icecreamReducers = require('../features/icecream/icecreamSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducers,
        icecream: icecreamReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store