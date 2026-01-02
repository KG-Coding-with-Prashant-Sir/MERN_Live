import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
import Title from './components/Title'

function App() {
  
  const students = ['Ridoy', 'Nafees', 'Alok', 'Surya', 'Niraj', 'Ashish', 'Gurpreet', 'Yousuf'];
  const newStudents = ['Ram', 'Shyam', 'Mohan', 'Sohan', 'Seeta', 'Geeta'];

  const clickMeHandler = () => {
    console.log('clickMeHandler clicked');
  };
  const deleteHandler = () => {
    console.log('deleteHandler clicked');
  };
  const sendHandler = () => {
    console.log('sendHandler clicked');
  };
  
  return (
  <>
    <Title titleText="Hello World"/>
    <Title titleText="KGCoding"/>
    <Title titleText="Subscribe"/>
    <Title titleText="Learning Props"/>

    <Button btnType='success' btnText="Click Me" handler={clickMeHandler}/>
    <Button btnType='danger' btnText="Delete" handler={deleteHandler}/>
    <Button btnText="Send" handler={sendHandler}/>

    <Heading />
    <RandomNumber />
    <RandomNumber />
    <RandomNumber />
    <RandomNumber />
    <StudentList students={students}/>
    <Paragraph />
    <DynamicComponent />
    <StudentList students={newStudents} />
  </>
  )
}

export default App
