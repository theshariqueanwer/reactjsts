// import { useStore, useSelector, useDispatch, connect} from 'react-redux';
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.showCounter);
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // action object will be generate by redux toolkit behind the scene like this {type: 'SOME_UNIQUE_IDENTIFIER', payload: 10}
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increment By 10</button>
        <button onClick={decreaseHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // import { useStore, useSelector, useDispatch, connect} from 'react-redux';
// import classes from "./Counter.module.css";
// import { useDispatch, useSelector } from "react-redux";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);
//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   const increaseHandler = () => {
//     dispatch({ type: "INCREASE", amount: 5 });
//   };

//   const decreaseHandler = () => {
//     dispatch({ type: "DECREASE", amount: 5 });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: "TOGGLE"});
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler} >Increment</button>
//         <button onClick={decrementHandler} >Decrement</button>
//       </div>
//       <div>
//         <button onClick={increaseHandler} >Increment By 5</button>
//         <button onClick={decreaseHandler} >Decrement By 5</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
