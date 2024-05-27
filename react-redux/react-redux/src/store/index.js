import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";
import counterReducer from './counter-slice'
import authReducer from './auth-slice'

// ----------------------------------------------------------------

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     decrease(state, action) {
//       state.counter = state.counter - action.payload;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// ----------------------------------------------------------------------------

// const initialAuthState = {
//   isAuthenticated: false,
// }

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// })

// ----------------------------------------------------------------------------

// const initialAuthState = {
//   isAuthenticated: false,
//   email: "",
//   password: "",
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state, action) {
//       state.isAuthenticated = true;
//       state.email = action.payload;
//       state.password = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.email = initialAuthState.email;
//       state.password = initialAuthState.password;
//     },
//   },
// });

// ----------------------------------------------------------------------------

// const initialLoginLogoutState = { username: "", password: "" };

// const loginLogoutSlice = createSlice({
//   name: "loginlogout",
//   initialState: initialLoginLogoutState,
//   reducers: {
//     setUsername(state, action) {
//       state.username = action.payload;
//     },
//     setPassword(state, action) {
//       state.password = action.payload;
//     },
//     setLogin(state, action) {
//       state.username = action.payload;
//       state.password = action.payload;
//     },
//     setLogout(state) {
//       state.username = initialLoginState.username;
//       state.password = initialLoginState.password;
//     },
//   },
// });

//----------------------------------------------------------------

// const store = configureStore({
//   // reducer: counterSlice.reducer,
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//     // loginlogout: loginLogoutSlice.reducer,
//   },
// });

//----------------------------------------------------------------

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


//----------------------------------------------------------------

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;

// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     // state.counter++; // it won't work in this way
//     // return state;
//     // return {
//     //   counter: state.counter,
//     //   showCounter: state.showCounter,
//     // };

//     // return {
//     //   counter: state.counter + 1,
//     //   showCounter: state.showCounter,
//     // };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECREASE") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

// createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.counter++;
//     },
//     decrement: (state) => {
//       state.counter--;
//     },
//     increase: (state, action) => {
//       state.counter += action.payload;
//     },
//     decrease: (state, action) => {
//       state.counter -= action.payload;
//     },
//     toggle: (state) => {
//       state.showCounter =!state.showCounter;
//     },
//   },
// })
