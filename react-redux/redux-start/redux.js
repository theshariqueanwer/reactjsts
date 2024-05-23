const redux = require("redux");

// function counterReducer() {};
const counterReducer = (state = { counter: 0 }, action) => {
  // initially it was like this
  //   return {
  //     counter: state.counter + 1,
  //   };

  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
  // console.log(latestState.counter);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "DEFAULT" });
