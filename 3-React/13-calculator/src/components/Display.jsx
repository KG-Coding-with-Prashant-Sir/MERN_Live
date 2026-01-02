const Display = ({textToShow}) => {
  return <>
  {textToShow ? <p>{textToShow}</p> : <p>0</p>}
  </>
}

export default Display;