import { useState } from "react"
import Display from "./components/Display"
import NumberPad from "./components/NumberPad"

function App() {

  console.log("Repainting App");
  const [displayVal, setDisplayVal] = useState('');

  return (
    <>
      <h1>Calculator</h1>
      <Display textToShow={displayVal}/>
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal}/>
    </>
  )
}

export default App
