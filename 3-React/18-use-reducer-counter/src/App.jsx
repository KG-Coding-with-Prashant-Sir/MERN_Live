import { useReducer, useRef, useState } from "react"

const counterReducer = (currentState, action) => {
  console.log('In Reducer', currentState, action);
  let newState = currentState;
  
  switch (action.type) {
    case 'INCREMENT':
      newState += 1;
      break;
    case 'DECREMENT':
      newState -= 1;
      break;
    case 'RESET':
      newState = 0;
      break;
    case 'DOUBLE':
      newState *= 2;
      break;
    case 'CHANGEBY':
      newState = newState + parseInt(action.payload.num);
      break;
    default:
      break;
  }
  return newState;
}

function App() {

  //const [counterVal, setCounterVal] = useState(0);
  const initalState = 0;
  const changeByInput = useRef();
  const [counterVal, counterDispatch] = useReducer(counterReducer, initalState);
  
  const handleIncrement = () => {
    //setCounterVal(current => current + 1);
    counterDispatch({
      type: "INCREMENT"
    });
  }

  const handleDecrement = () => {
    //setCounterVal(current => current - 1);
    counterDispatch({
      type: "DECREMENT"
    });
  }

  const handleChangeBy = () => {
    const num = changeByInput.current.value;
    changeByInput.current.value = 0;
    counterDispatch({
      type: "CHANGEBY",
      payload: { num }
    });
  }

  return (
    <>
      <h1>Count: {counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => counterDispatch({type: "RESET"})}>Reset</button>
      <button onClick={() => counterDispatch({type: "DOUBLE"})}>Double</button>
      <button onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changeByInput} placeholder="Number"/>
    </>
  )
}

export default App
