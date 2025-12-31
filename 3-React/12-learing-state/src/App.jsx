import { useState } from "react";
import List from "./components/List"

function App() {

  const [studentArr, setStudentArr] = useState(["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Gopi"]);

  console.log("Painting App Component");
  console.log("State Value is:", studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      const newArr = [event.target.value, ...studentArr];
      event.target.value = '';
      setStudentArr(newArr);
      console.log(newArr);
    }
  }

  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
    <input type="text" placeholder="New Student Name" onKeyDown={onChangeHandler} />
  </>

  )
}

export default App
