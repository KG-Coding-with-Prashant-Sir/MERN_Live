import style from './App.module.css'
import Container from './Container';

function App() {

  return (
    <>
      <Container >
        <h1 className={style.heading}>
          hello"X Æ A-Xii"
        </h1>
        <p className={`${style.para} ${style.heading}`}>This is a sample paragraph</p>
      </Container>
      <Container>
        <p>This is another random text</p>
      </Container>
    </>
  )
}

export default App;
