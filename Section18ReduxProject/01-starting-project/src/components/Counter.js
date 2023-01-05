import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementtHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementtHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//Chat GPT solution
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// const Counter = () => {
//   const count = useSelector(state => state.count)
//   const dispatch = useDispatch()

//   const increment = () => {
//     dispatch({ type: 'INCREMENT' })
//   }

//   const decrement = () => {
//     dispatch({ type: 'DECREMENT' })
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   )
// }

// export default Counter
