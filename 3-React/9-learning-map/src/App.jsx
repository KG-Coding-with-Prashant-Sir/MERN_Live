import List from "./components/List"

function App() {
  
  // const studentArr = ["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Gopi"];
  let studentArr;

  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
  </>

  )
}

export default App
