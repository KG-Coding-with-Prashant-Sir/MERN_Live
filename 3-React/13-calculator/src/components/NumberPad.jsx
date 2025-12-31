import Button from "./Button";
import { BsCake2Fill } from "react-icons/bs";

const NumberPad = ({displayVal, setDisplayVal}) => {

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = ["+", "-", "*", "/"];

  const addToDisplay = (text) => {
    setDisplayVal(displayVal + text);
  }

  const evaluateExpression = () => {
    const result = eval(displayVal);
    setDisplayVal(result);
  }

  return <>
    <Button text="C" onClickHandler={() => setDisplayVal('')}/>
    <br />
    {buttons.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)}/>)}
    <br />
    {operations.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)}/>)}
    <br />
    <Button text={<BsCake2Fill />} onClickHandler={evaluateExpression}/>
  </>
};

export default NumberPad;