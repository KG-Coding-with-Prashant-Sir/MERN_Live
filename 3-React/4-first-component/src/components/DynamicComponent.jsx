const DynamicComponent = () => {
  const studentName = 'Shyam';
  const marks = [23, 45, 67, 98, 54];

  const calPercentage = () => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }

  return <p>{studentName} scored {calPercentage()}% marks in this exam.</p>;
}

export default DynamicComponent;