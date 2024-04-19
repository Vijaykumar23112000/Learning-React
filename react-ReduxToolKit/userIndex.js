const userStore = require('./app/userStore')
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log("Initial State : ",userStore.getState());

userStore.subscribe(()=>console.log("Updated State : ",userStore.getState()))

userStore.dispatch(fetchUsers())

